import React from 'react';
import { connect } from 'react-redux';

/*  Styles  */
import styles from './search-input.module.scss';

/*  Utils */
import { loadData } from '../../actions';
import { State } from '../../interfaces';
import { generatedFilesSelector } from '../../selectors';

type Props = {
  loadData: (a: File[]) => void,
  value: string,
  onChangeFilter: (a: string) => void,
};

const SearchInput = ({ value, onChangeFilter }: Props) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFilter(e.target.value);
  };

  return (
    <input
      placeholder="Search"
      className={styles.search}
      type="text"
      onChange={onChangeHandler}
      value={value}
    />
  );
};

const mapStateToProps = (state: State) => ({
  spriteList: generatedFilesSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadData: loadData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);