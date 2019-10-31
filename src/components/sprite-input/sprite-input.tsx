import React from 'react';
import { IUploadedFiles } from '../../interfaces';
import { onUploadData } from '../../services/loader-service';

const SpriteInput = () => {

  const onChangeHandler = (e: React.ChangeEvent) => {
    const { files } = e.target as HTMLInputElement;
    if (!files) return;
    let newFiles: IUploadedFiles = [];

    for (let i = 0, filesLength = files.length; i < filesLength; i++) {
      newFiles.push(files[i]);
    }

    onUploadData(newFiles);
  };

  return (
    <label className="btn-solid header__input">
      <span>Pick or drop</span>
      <input type="file" multiple hidden onChange={onChangeHandler}
      />
    </label>
  );
};

export default SpriteInput;