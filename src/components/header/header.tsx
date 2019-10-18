import React, { ChangeEvent } from 'react';

import { loadData } from '../../actions';

/*  Styles  */
import './header.scss';
import { connect } from 'react-redux';
import { State, UploadedState } from '../../interfaces';

interface Props {
  loadData: (e: any, data?: any) => any,
  uploadedData: UploadedState
}

const Header: React.FC<Props> = (props) => {

  /**
   * TODO: Нужен другой способ для передачи стейта в action для проверки новых файлов*/
  const onUploadData = (e: ChangeEvent) => {
    props.loadData(e, props.uploadedData)
  };

  return (
    <header className="header">
      <label className="btn-solid header__input">
        <span>Pick or drop</span>
        <input type="file"
          multiple
          hidden
          onChange={onUploadData}
        />
      </label>
      <button type="button"
        className="btn-text header__btn-cancel"
      >
        Clear
      </button>
    </header>
  )
};

const mapStateToProps = ({uploadedData}: State) => ({uploadedData});

const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
