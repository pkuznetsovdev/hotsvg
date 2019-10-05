import React from 'react';

/*  Styles  */
import style from './header.module.scss';

const Header: React.FC = () => (
  <header className={style.header}>
    <label className="btn-solid pulse">
      <span>Pick or drop</span>
      <input type="file"
        hidden
      />
    </label>
    <button type="button"
      className="btn-text"
      hidden
    >
      Clear
    </button>
  </header>
);

export default Header;
