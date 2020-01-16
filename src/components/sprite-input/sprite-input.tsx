import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/*  Utils */
import { loadData } from '../../actions';
import {Dispatch} from "redux";

type Props = {
  loadData: (a: File[]) => void
};

const SpriteInput = (props: Props) => {

  const onChangeHandler = (e: React.ChangeEvent) => {
    const { files } = e.target as HTMLInputElement;
    if (files) {
      props.loadData(Array.from(files));
    }
  };

  useEffect(() => {
    window.addEventListener('drop', dropHandler, false);
    window.addEventListener('dragover', dragHandler, false);

    return () => {
      window.removeEventListener('drop', dropHandler, false);
      window.removeEventListener('dragover', dragHandler, false);
    };
  }, []);

  const dragHandler = (e: DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = (e: DragEvent) => {
    e.preventDefault();

    if (e.dataTransfer && e.dataTransfer.files) {
      /*  file check - to remove from the component */
      props.loadData(Array.from(e.dataTransfer.files).filter(file => file.type === 'image/svg+xml'));
    }
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadData: loadData(dispatch),
});

export default connect(null, mapDispatchToProps)(SpriteInput);