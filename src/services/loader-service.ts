import { IUploadedFiles } from '../interfaces';
import store from '../store';

import { loadData } from '../actions';

const onUploadData = (newFiles: IUploadedFiles) => {
  /* todo Same file can't be uploaded right after was deleted*/
  const {uploadedFiles} = store.getState().uploadedData;
  newFiles = filterNewFilesOnUpload(uploadedFiles, newFiles);
  /* todo bad code - no dispatch*/
  if (newFiles.length) {
    loadData(newFiles)(store.dispatch);
  }
};

const filterNewFilesOnUpload = (oldFilesArr: File[], NewFilesArr: File[]) => {
  return NewFilesArr.filter(newFile => {
    return !oldFilesArr.some(oldFile => {
      return oldFile.name === newFile.name && oldFile.lastModified === newFile.lastModified
    });
  })
};

export {
  onUploadData
}