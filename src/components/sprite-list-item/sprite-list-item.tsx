import React from 'react';

/*  Utils */
import { ISymbol } from '../../interfaces';

/*  Styles  */
import './sprite-list-item.scss'

interface Props {
  symbol: ISymbol
}

const SpriteListItem = ({symbol: {id, viewBox, title}}: Props) => {

  const Icon = () => (
    <svg viewBox={viewBox} className='icon'>
      <use xlinkHref={`#${id}`} />
    </svg>
  );

  return (
    <li className="sprite-list__item">
      <Icon />
      <div className="icon-info">
        <p className="icon-name">{id}</p>
        <p className="icon-title">{title}</p>
      </div>
    </li>
  );
};

export default SpriteListItem;