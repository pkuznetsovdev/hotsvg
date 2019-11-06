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
  let listCounter = 0;

  const spriteLists = spriteArray.map( ({title, spriteFile}) => {
    const symbolList = getSVGSymbols(spriteFile);
    let spriteItems;

    const parser = new DOMParser();
    const spriteElement = parser.parseFromString(spriteFile, "text/xml");
    spriteElement.documentElement.style.display = 'none';
    document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);

    if (Array.isArray(symbolList)) {
      let itemCounter = 0;
      spriteItems = symbolList.map( (symbol: ISymbol) => {
        return <SpriteListItem key={itemCounter++} symbol={symbol} />
      });
    } else {
      spriteItems = <li>{symbolList.svg}</li>;
    }

    return (
      <ul className="sprite-list" key={listCounter++}>
        <li key={0} className="sprite-list__title"><h3>{title}</h3></li>
        {spriteItems}
      </ul>
    )
  });

  return (
    <main className="container">
      {spriteLists}
    </main>
  );
};

export default SpriteList;



