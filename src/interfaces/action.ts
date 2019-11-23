import actionTypes from '../actions/actionTypes';
import { UploadedListType } from './';

type Action =
  { type: actionTypes.onUpdateSpriteFilesStart } |
  { type: actionTypes.onUpdateSpriteFilesSuccess, payload: UploadedListType } |
  { type: actionTypes.onUpdateSpriteFilesFail, payload: string | null } |

  { type: actionTypes.onDeleteUploadedData } |
  { type: actionTypes.onDeleteUploadedFile, payload: number};

export default Action;