import React from 'react';

/*  Components  */
import SpriteInput from '../sprite-input';
import DeleteDataButton from '../delete-data-button';

/*  Styles  */
import './header.scss';

const Header: React.FC = () => (
  <header className="header">
    <SpriteInput />
    <DeleteDataButton />
  </header>
);

export default Header;