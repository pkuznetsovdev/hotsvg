import { SvgFile, SvgIcon, SvgSymbol } from '../interfaces';

const REG_EXP = {
  symbolId: /id=["'](.*?)["']/i,
  symbolTitle: /<title>(.*?)<\/title>/i,
  symbolViewBox: /viewBox=["'](.*?)["']/i,
  symbol: /<symbol.*?<\/symbol>/gmis,

  svg: /<svg.*?<\/svg>/gmis,

  fileTitle: /\.svg$/i,
};

function getContentData (content: string) {
  return getSvgSymbols(content) || getSvgIcon(content) ;
}

function getContentData1 (files: SvgFile[]) {
  return files.map(({src}) => getSvgSymbols1(src) || getSvgIcon1(src)).filter(Boolean);
}

function getSvgIcon(fileContent: string) {
  const icon = fileContent.match(REG_EXP.svg);
  return icon && icon[0];
}

function getSvgIcon1(fileContent: string) {
  const icon = fileContent.match(REG_EXP.svg);
  return icon && new SvgIcon(icon[0]);
}

function getSvgSymbols(fileContent: string) {
  const symbolArray = getSymbolArray(fileContent);

  return symbolArray && symbolArray.map(svg => {
      return new SvgSymbol(
        getSymbolAttribute(svg, REG_EXP.symbolId),
        getSymbolAttribute(svg, REG_EXP.symbolTitle),
        getSymbolAttribute(svg, REG_EXP.symbolViewBox),
      );
  });

  function getSymbolArray(sprite: string) {
    return sprite.match(REG_EXP.symbol) || null;
  }

  function getSymbolAttribute(svg: string, exp: RegExp) {
    const result = svg.match(exp);
    return result ? result[1] : '';
  }
}

function getSvgSymbols1(fileContent: string) {
  const symbolArray = getSymbolArray(fileContent);

  return symbolArray && symbolArray.map(svg => {
      return new SvgSymbol(
        getSymbolAttribute(svg, REG_EXP.symbolId),
        getSymbolAttribute(svg, REG_EXP.symbolTitle),
        getSymbolAttribute(svg, REG_EXP.symbolViewBox),
      );
  });

  function getSymbolArray(sprite: string) {
    return sprite.match(REG_EXP.symbol) || null;
  }

  function getSymbolAttribute(svg: string, exp: RegExp) {
    const result = svg.match(exp);
    return result ? result[1] : '';
  }
}

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
          file.lastModified
          )
        );
      };
    });
  }));

  function getFileTitle (fileName: string, exp: RegExp) {
    return fileName.replace(exp, '');
  }

  function getFileId (lastModified: number, size: number) {
    return (lastModified + size) % 100000;
  }
}

export {
  generateSvgFileArr,
  getContentData,
  getContentData1
};