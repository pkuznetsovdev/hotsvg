import React from 'react';

/*  Components  */
import SpriteInput from '../sprite-input';
/*  Styles  */
import './header.scss';



const Header: React.FC = () => {

  return (
    <header className="header">
      <SpriteInput />
      <button type="button"
              className="btn-text header__btn-cancel">
        Clear
      </button>
    </header>
  );
};

export default Header;