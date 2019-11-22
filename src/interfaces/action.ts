import actionTypes from '../actions/actionTypes';
import { ISpriteList } from './';

type Action =
  { type: actionTypes.onUpdateSpriteFilesStart } |
  { type: actionTypes.onUpdateSpriteFilesSuccess, payload: ISpriteList } |
  { type: actionTypes.onUpdateSpriteFilesFail, payload: string | null } |

  { type: actionTypes.onDeleteUploadedData } |
  { type: actionTypes.onDeleteUploadedFile, payload: number};

export default Action;