import actionTypes from '../actions/actionTypes';
import { IUploadedFiles } from './state';

type Action =
  {type: actionTypes.onUploadStart} |
  {type: actionTypes.onUploadSuccess, payload: IUploadedFiles} |
  {type: actionTypes.onUploadFail, payload: string | null};

export default Action;