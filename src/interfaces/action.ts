import actionTypes from '../actions/actionTypes';
import {RejectedFile, SvgIcon, SvgSprite} from './index';

type Action =
  { type: actionTypes.updateSpriteFilesStart } |
  { type: actionTypes.updateSpriteFilesSuccess, payload: (SvgIcon | SvgSprite)[] } |
  { type: actionTypes.updateSpriteFilesFail, payload: string } |

  { type: actionTypes.updateRejectedFiles, payload: RejectedFile[] } |

  /*{ type: actionTypes.updateFilesData, payload: IUploadedFilesData } |*/

  { type: actionTypes.deleteUploadedData } |
  { type: actionTypes.deleteUploadedFile, payload: number};

export default Action;