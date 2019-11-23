import { UploadedFiles, UploadedListType, UploadedListItem, SvgSymbol, SvgSymbolList } from '../interfaces';

const REG_EXP = {
  id: /id=["'](.*?)["']/i,
  title: /<title>(.*?)<\/title>/i,
  viewBox: /viewBox=["'](.*?)["']/i,
  symbol: /<symbol.*?<\/symbol>/gmis,
  svg: /<svg.*?<\/svg>/gmis,

  spriteTitle: /\.svg$/i,
};

function getContentData (content: string) {
  return getSvgSymbols(content) || getSvgIcon(content) ;
}

function getSvgIcon(fileContent: string): {} | null {
  return { svg: fileContent.match(REG_EXP.svg)![0] };
}

function getSvgSymbols(fileContent: string): SvgSymbolList | null {
  const symbolArray = getSymbolArray(fileContent);
  if (!symbolArray) return null;

  return symbolArray.map(svg => {
      return new SvgSymbol(
        getSymbolAttribute(svg, REG_EXP.id),
        getSymbolAttribute(svg, REG_EXP.title),
        getSymbolAttribute(svg, REG_EXP.viewBox),
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

function parseFilesToSpriteList(uploadedFiles: UploadedFiles): Promise<UploadedListType> {
  return Promise.all<UploadedListItem>(uploadedFiles.map(file => {
    return new Promise(res => {

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');

      reader.onload = () => {
        return res({
          content: reader.result as string,
          title: getSpriteTitle(file.name, REG_EXP.spriteTitle),
          id: getSpriteId(file.lastModified, file.size),
          spriteData: {
            name: file.name,
            lastModified: file.lastModified,
          },
        });
      };
    });
  }));

  function getSpriteTitle (fileName: string, exp: RegExp) {
    return fileName.replace(exp, '');
  }

  function getSpriteId (lastModified: number, size: number) {
    return (lastModified + size) % 100000;
  }
}

export {
  getSvgSymbols,
  parseFilesToSpriteList,
  getContentData,
};