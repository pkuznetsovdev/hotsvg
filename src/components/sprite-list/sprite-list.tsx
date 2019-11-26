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



