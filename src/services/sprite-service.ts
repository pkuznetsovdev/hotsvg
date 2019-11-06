import { ISymbol, ISvg } from '../interfaces';

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

export {
  getSVGSymbols
}