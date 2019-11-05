import React from 'react';

/*  Utils */
import { ISpriteList, ISymbol } from '../../interfaces';
import { getSVGSymbols } from '../../services/sprite-service';

/*  Components  */
import SpriteListItem from '../sprite-list-item';

/*  Styles  */
import './sprite-list.module.scss';

const SpriteList = ({spriteArray}: ISpriteList) => {
  let listCounter = 0;

  const spriteLists = spriteArray.map( ({title, spriteFile}, idx) => {
    const symbolList = getSVGSymbols(spriteFile);
    let spriteItems;

    if (Array.isArray(symbolList)) {
      let itemCounter = 0;
      spriteItems = symbolList.map( ({id, title, viewBox}: ISymbol) => {
        return <SpriteListItem key={itemCounter++} id={id} title={title} viewBox={viewBox}/>
      });
    } else {
      spriteItems = <li>{symbolList.svg}</li>;
    }

    return (
      <ul className="sprite-list" key={listCounter++}>
        <li key={0}><h3>{title}</h3></li>
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



