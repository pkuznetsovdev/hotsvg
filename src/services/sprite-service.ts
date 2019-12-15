import { SvgFile, SvgIcon, SvgSprite, SvgSymbol, svgTypes } from '../interfaces';
import appendXMLToDom from '../utils/appendXMLToDom';

const REG_EXP = {
  symbolId: /id=["'](.*?)["']/i,
  symbolTitle: /<title>(.*?)<\/title>/i,
  symbolViewBox: /viewBox=["'](.*?)["']/i,
  symbol: /<symbol.*?<\/symbol>/gmis,

  svg: /<svg.*?<\/svg>/gmis,

  fileTitle: /\.svg$/i,
};

function generateSvgFileArr(uploadedFiles: File[]): Promise<SvgFile[]> {
  return Promise.all<SvgFile>(uploadedFiles.map(file => {
    return new Promise(res => {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        return res(new SvgFile(
          reader.result as string,
          getFileTitle(file.name, REG_EXP.fileTitle),
          getFileId(file.lastModified, file.size),
          file.name,
          file.lastModified,
          ),
        );
      };
    });
  }));

  function getFileTitle(fileName: string, exp: RegExp) {
    return fileName.replace(exp, '');
  }

  function getFileId(lastModified: number, size: number) {
    return (lastModified + size) % 100000;
  }
}

function getContentData({ src, id, title, data }: SvgFile) {
  return getSvgSymbols(src, id, title, data) || getSvgIcon(src, id, title, data);
}

function getSvgIcon(fileContent: string, id: number, title: string, data: { name: string, lastModified: number }) {
  const icon = fileContent.match(REG_EXP.svg);
  return icon && new SvgIcon(icon[0], id, title, data);
}

function getSvgSymbols(fileContent: string, id: number, title: string, data: { name: string, lastModified: number }): SvgSprite | null {
  const symbolArray = getSymbolArray(fileContent);
  if (!symbolArray) return null;

  appendXMLToDom(document.body, fileContent);
  return {
    type: svgTypes.sprite,
    id,
    title,
    data: {
      name: data.name,
      lastModified: data.lastModified,
    },
    symbols: symbolArray.map(svg => new SvgSymbol(
      getSymbolAttribute(svg, REG_EXP.symbolId),
      getSymbolAttribute(svg, REG_EXP.symbolTitle),
      getSymbolAttribute(svg, REG_EXP.symbolViewBox),
    )),
  };

  function getSymbolArray(sprite: string) {
    return sprite.match(REG_EXP.symbol);
  }

  function getSymbolAttribute(svg: string, exp: RegExp) {
    const result = svg.match(exp);
    return result ? result[1] : '';
  }
}

export {
  generateSvgFileArr,
  getContentData,
};