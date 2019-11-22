import React from 'react';
import { connect } from 'react-redux';

/*  Utils */
import { loadData } from '../../actions';
import { IUploadedFiles } from '../../interfaces';

type Props = {
  loadData: (a: IUploadedFiles) => void
};

const SpriteInput = (props: Props) => {

  const onChangeHandler = (e: React.ChangeEvent) => {
    const { files } = e.target as HTMLInputElement;
    if (!files) return;

    props.loadData(Array.from(files));
  };

  return (
    <label className="btn-solid header__input">
      <span>Pick or drop</span>
      <input type="file"
             accept=".svg"
             multiple
             hidden
             onChange={onChangeHandler}
             onClick={({ target }) => (target as HTMLInputElement).value = ''}
      />
    </label>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  loadData: loadData(dispatch),
});

export default connect(null, mapDispatchToProps)(SpriteInput);