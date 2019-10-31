import React from 'react';

/*  Styles  */
import './sprite-list.module.scss';

interface ISpriteList {
  spriteArray: ISpriteListItem[]
}
interface IMySpriteList {
  spriteArray: IMySpriteListItem[]
}

type ISpriteListItem = {title: string};
type IMySpriteListItem = {spriteFile: string, title: string};

interface Text {
  text?: number|string
}

const SpriteList = ({spriteArray}: IMySpriteList) => {

  const spriteItems = spriteArray.map( ({title}, idx: number) => {
    return <SpriteListItem key={idx} text={title} />
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

