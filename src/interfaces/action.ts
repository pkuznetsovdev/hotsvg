import actionTypes from '../actions/actionTypes';

type Action =
  {type: actionTypes.onUploadStart} |
  {type: actionTypes.onUploadSuccess, payload: File[]} |
  {type: actionTypes.onUploadFail, payload: string | null};

export default Action;