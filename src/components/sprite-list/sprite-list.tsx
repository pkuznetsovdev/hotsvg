import React from 'react';

/*  Styles  */
import './sprite-list.module.scss';

interface ISpriteList {
  spriteArray: {title: string}[]
}

interface Text {
  text?: number|string
}

const SpriteList: React.FC<ISpriteList> = ({spriteArray}) => {

  const spriteItems = spriteArray.map( ({title}, idx) => <SpriteListItem key={idx}
text={title} />);

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
