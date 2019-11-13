import { ISymbol, ISvg, IUploadedFiles, ISpriteList, ISpriteListItem } from '../interfaces';

function getSVGSymbols(spriteFile: string): ISymbol[] | ISvg {
  const symbolArray = spriteFile.match(/<symbol.*?<\/symbol>/gmis);
  if (symbolArray === null) {
      return {svg: spriteFile.match(/<svg.*?<\/svg>/gmis)![0]};
  }

  const symbolList: ISymbol[] = [];

  /*todo bad code*/
  symbolArray.forEach(svg => {
    const symbol: ISymbol = {id: '', title: '', viewBox: ''};
    symbol.id = svg.match(/<symbol.*id=["'](.*?)["']/i) ? svg.match(/<symbol.*id=["'](.*?)["']/i)![1] : '';
    symbol.title = svg.match(/<title>(.*?)<\/title>/i) ? svg.match(/<title>(.*?)<\/title>/i)![1] : '';
    symbol.viewBox = svg.match(/viewBox=["'](.*?)["']/i) ? svg.match(/viewBox=["'](.*?)["']/i)![1] : '';

    symbolList.push(symbol);
  });

  return symbolList;
}

function extractDataFromSprite(filesArr: IUploadedFiles): Promise<ISpriteList> {
  return Promise.all<ISpriteListItem>(filesArr.map(file => {
    return new Promise(res => {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        const title = file.name.replace(/\.svg$/i, '');
        const id = (file.lastModified + file.size)%100000;
        res({
          spriteFile: reader.result as string,
          title,
          id,
          spriteData: {
            name: file.name,
            lastModified: file.lastModified
          }
        });
      };
    });
  }));
}

export {
  getSVGSymbols,
  extractDataFromSprite
}