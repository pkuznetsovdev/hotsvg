import actionTypes from '../actions/actionTypes';
import { IUploadedFiles, ISpriteList } from './';

type Action =
  { type: actionTypes.onUploadStart } |
  { type: actionTypes.onUploadSuccess, payload: IUploadedFiles } |
  { type: actionTypes.onUploadFail, payload: string | null } |

  { type: actionTypes.onUpdateSpriteFilesStart } |
  { type: actionTypes.onUpdateSpriteFilesSuccess, payload: ISpriteList } |
  { type: actionTypes.onUpdateSpriteFilesFail, payload: string | null } |

  { type: actionTypes.onDeleteUploadedData } |
  { type: actionTypes.onDeleteUploadedFile, payload: number};

export default Action;