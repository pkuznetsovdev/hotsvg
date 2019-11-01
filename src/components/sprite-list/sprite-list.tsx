import React from 'react';

/*  Utils */
import { ISpriteList } from '../../interfaces';

/*  Styles  */
import './sprite-list.module.scss';

interface Text {
  text?: number|string
}

const SpriteList = ({spriteArray}: ISpriteList) => {

  const spriteItems = spriteArray.map( ({title, spriteFile}, idx: number) => {
    return <SpriteListItem key={idx} text={title}/>
  });

  return (
    <main className="container">
      <ul className="sprite-list">
        {spriteItems}
      </ul>
    </main>
  );
};

export default SpriteList;

const SpriteListItem: React.FC<Text> = (props) => {
  return (
    <li>{props.text || '1111'}</li>
  );
};

