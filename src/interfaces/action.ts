import actionTypes from '../actions/actionTypes';
import { SvgArray } from './index';

type Action =
  { type: actionTypes.onUpdateSpriteFilesStart } |
  { type: actionTypes.onUpdateSpriteFilesSuccess, payload: SvgArray } |
  { type: actionTypes.onUpdateSpriteFilesFail, payload: string | null } |

  { type: actionTypes.onDeleteUploadedData } |
  { type: actionTypes.onDeleteUploadedFile, payload: number};

export default Action;