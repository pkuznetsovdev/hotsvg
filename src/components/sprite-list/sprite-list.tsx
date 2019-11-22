import React from 'react';

/*  Utils */
import { ISpriteList, ISymbol } from '../../interfaces';
import { getSVGSymbols } from '../../services/sprite-service';

/*  Components  */
import SpriteListItem from '../sprite-list-item';

/*  Styles  */
import './sprite-list.scss';

interface Props {
  spriteArray: ISpriteList
}

const SpriteList = ({spriteArray}: Props) => {

  const spriteLists = spriteArray.map( ({title, spriteFile, id}) => {
    const symbolList = getSVGSymbols(spriteFile);
    let spriteItems;

    /*todo bad code*/
    const parser = new DOMParser();
    const spriteElement = parser.parseFromString(spriteFile, "text/xml");
    spriteElement.documentElement.style.display = 'none';
    document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);

    /*todo bad code*/
    if (Array.isArray(symbolList)) {
      spriteItems = symbolList.map( (symbol: ISymbol, idx) => {
        return <SpriteListItem key={idx+1} symbol={symbol} />
      });
    } else {
      spriteItems = <li className="sprite-list__item" dangerouslySetInnerHTML={{__html: symbolList.svg}} />;
    }

    return (
      <ul className="sprite-list" key={id} id={`${id}`}>
        <li key={0} className="sprite-list__title"><h3>{title}</h3></li>
        {spriteItems}
      </ul>
    )
  });

  return <>{spriteLists}</>;
};

export default SpriteList;



