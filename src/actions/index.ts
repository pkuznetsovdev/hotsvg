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
  dispatch(uploadSuccess(newFiles));
};

export {
  loadData,
};