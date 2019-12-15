import { SvgFile } from '../interfaces';
import { generatedFilesSelector } from '../selectors';

import store from '../store';

const filterNewFilesOnUpload = (NewFilesArr: SvgFile[]) => {
  const uploadedFiles = generatedFilesSelector(store.getState());
  return NewFilesArr.filter(newFile => {
    return !uploadedFiles.some(uploadedFile => {
      return uploadedFile.data.name === newFile.data.name && uploadedFile.data.lastModified === newFile.data.lastModified
    });
  });
};

export default filterNewFilesOnUpload;