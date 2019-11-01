import { ISpriteListItem } from '../interfaces';

function getSVGSymbols({spriteFile, title}: ISpriteListItem) {
  const symbolArray = spriteFile.match(/<symbol.*?<\/symbol>/gmis);
  if (symbolArray === null) {
      return {symbol: spriteFile.match(/<svg.*?<\/svg>/gmis)![0], title};
  }

  const symbolList: {}[] = [];

  symbolArray.forEach(svg => {
    const symbol: {id: string, title: string, viewBox: string} = {id: '', title: '', viewBox: ''};

    symbol.id = svg.match(/<symbol.*id=["'](.*?)["']/i)![1] || '';
    symbol.title = svg.match(/<title>(.*?)<\/title>/i)![1] || '';
    symbol.viewBox = svg.match(/viewBox=["'](.*?)["']/i)![1] || '';

    symbolList.push(symbol);
  });
  return {symbolList, title};
}

export {
  getSVGSymbols
}