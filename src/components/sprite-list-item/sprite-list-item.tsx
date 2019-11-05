import React from 'react';

interface Props {
  id: string,
  title: string,
  viewBox: string
}

const SpriteListItem = ({id, title, viewBox}: Props) => {
  return (
    <li>{title || '1111'}</li>
  );
};

export default SpriteListItem;