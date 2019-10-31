import actionTypes from './actionTypes';
import { Action, IUploadedFiles } from '../interfaces';

const uploadStarted = (): Action => ({ type: actionTypes.onUploadStart });

const uploadSuccess = (data: IUploadedFiles): Action => {
  return {
    type: actionTypes.onUploadSuccess,
    payload: data,
  };
};

const uploadFail = (error: string): Action => {
  return {
    type: actionTypes.onUploadFail,
    payload: error,
  };
};

const loadData = (newFiles: IUploadedFiles) => (dispatch: any) => {
  dispatch(uploadStarted());

  if (newFiles) {
    dispatch(uploadSuccess(newFiles));
  } else {
    uploadFail('No files, common..')
  }
};

export {
  loadData,
};