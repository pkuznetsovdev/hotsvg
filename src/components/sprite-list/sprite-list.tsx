import React from 'react';

/*  Utils */
import { SvgFile, SvgSymbol } from '../../interfaces';

/*  Components  */
import SpriteListItem from '../sprite-list-item';

/*  Styles  */
import './sprite-list.scss';

interface Props {
  spriteList: SvgFile
}

type SpriteListProps = {
  symbolList: SvgSymbol[],
  id: number,
  title: string,
  regExp: RegExp,
}

const SpriteList = ({ symbolList, id, title, regExp }: SpriteListProps) => {

  const spriteItems = symbolList
    .filter(symbol => symbol.id.search(regExp) !== -1)
    .map((symbol, idx) => {
    /*  Add id field in order not to use array idx*/
    return <SpriteListItem key={idx + 1} symbol={symbol} />;
  });

  if (!spriteItems.length) {
    return null
  }

  return (
    <ul className="sprite-list" id={`${id}`}>
      <li key={0} className="sprite-list__title"><h3>{title}</h3></li>
      {spriteItems}
    </ul>
  )
};

export default SpriteList;



