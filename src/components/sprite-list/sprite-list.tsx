import React from 'react';

/*  Utils */
import { UploadedListType, SvgSymbol, SvgSymbolList } from '../../interfaces';

/*  Components  */
import SpriteListItem from '../sprite-list-item';

/*  Styles  */
import './sprite-list.scss';

interface Props {
  spriteList: UploadedListType
}

/*const SpriteList = ({spriteList}: Props) => {

  const generatedLists = spriteList.map( ({title, content, id}) => {
    const symbolList = getSvgSymbols(content);
    let spriteItems;

    /!*todo bad code*!/
    const parser = new DOMParser();
    const spriteElement = parser.parseFromString(content, "text/xml");
    spriteElement.documentElement.style.display = 'none';
    document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);

    /!*todo bad code*!/
    if (Array.isArray(symbolList)) {
      spriteItems = symbolList.map( (symbol: SvgSymbol, idx) => {
        return <SpriteListItem key={idx+1} symbol={symbol} />
      });
    } else {
      //spriteItems = <li className="sprite-list__item" dangerouslySetInnerHTML={{__html: symbolList.svg}} />;
      spriteItems = null
    }

    return (
      <ul className="sprite-list" key={id} id={`${id}`}>
        <li key={0} className="sprite-list__title"><h3>{title}</h3></li>
        {spriteItems}
      </ul>
    )
  });*/

type SpriteListProps = {
  symbolList: SvgSymbolList,
  id: number,
  title: string
}

const SpriteList = ({symbolList, id, title}: SpriteListProps) => {
  const spriteItems = symbolList.map( (symbol: SvgSymbol, idx) => {

    return <SpriteListItem key={idx + 1} symbol={symbol} />
  });

  return <ul className="sprite-list" id={`${id}`}>
    <li key={0} className="sprite-list__title"><h3>{title}</h3></li>
    {spriteItems}
  </ul>
};

export default SpriteList;



