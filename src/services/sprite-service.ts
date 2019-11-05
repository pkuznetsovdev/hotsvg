import { ISymbol } from '../interfaces';

function getSVGSymbols(spriteFile: string) {
  const symbolArray = spriteFile.match(/<symbol.*?<\/symbol>/gmis);
  if (symbolArray === null) {
      return {svg: spriteFile.match(/<svg.*?<\/svg>/gmis)![0]};
  }

  const symbolList: ISymbol[] = [];

  symbolArray.forEach(svg => {
    const symbol: ISymbol = {id: '', title: '', viewBox: ''};

    symbol.id = svg.match(/<symbol.*id=["'](.*?)["']/i)![1] || '';
    symbol.title = svg.match(/<title>(.*?)<\/title>/i)![1] || '';
    symbol.viewBox = svg.match(/viewBox=["'](.*?)["']/i)![1] || '';

    symbolList.push(symbol);
  });

  return symbolList;
}

export {
  getSVGSymbols
}