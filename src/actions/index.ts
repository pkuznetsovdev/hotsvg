import actionTypes from './actionTypes';
import { IUploadedState } from '../interfaces/';

const uploadStarted = () => ({
  type: actionTypes.onUploadStart,
});

const uploadSuccess = (data: File[]) => {
  return {
    type: actionTypes.onUploadSuccess,
    payload: data,
  };
};

const uploadFail = (error: string) => {
  return {
    type: actionTypes.onUploadFail,
    payload: error,
  };
};

const loadData = (e: React.FormEvent<HTMLInputElement>, state?: IUploadedState) => (dispatch: any) => {
  dispatch(uploadStarted());

  const target = e.target as HTMLInputElement;

  switch (e.type) {
    case 'change' :
      if (target.files) {

        const newFilesArr = [];
        const length = target.files.length;

        for (let i = 0; i < length; i++) {
          newFilesArr.push(target.files[i]);
        }

        if (state) {
          filterNewFilesOnUpload(state.uploadedFiles, newFilesArr)
            .then(newFiles => {
              dispatch(uploadSuccess(newFiles as File[]));
              return newFiles
            })
            .catch(error => dispatch(uploadFail(error)));
        } else {
          dispatch(uploadSuccess(newFilesArr));
        }
      } else {
        dispatch(uploadFail('Ooops'))
      }
  }
};

export {
  loadData,
};

/**
 * TODO: Куда отправить эту проверку?*/
const filterNewFilesOnUpload = (oldFilesArr: File[], NewFilesArr: File[]) => new Promise<File[]|string>( (res, rej) => {
  const newFiles = NewFilesArr.filter((newFile: File) => {
    return !oldFilesArr.some(oldFile => {
      return oldFile.name === newFile.name && oldFile.size === newFile.size;
    });
  });

  if (newFiles.length) {
    res(newFiles)
  } else {
    rej('No new files added')
  }
});