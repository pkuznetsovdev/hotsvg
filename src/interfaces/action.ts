import actionTypes from '../actions/actionTypes';
import { IUploadedFilesData, SvgIcon, SvgSprite } from './index';

type Action =
  { type: actionTypes.onUpdateSpriteFilesStart } |
  { type: actionTypes.onUpdateSpriteFilesSuccess, payload: SvgIcon | SvgSprite } |
  { type: actionTypes.onUpdateSpriteFilesFail, payload: string | null } |

  { type: actionTypes.updateFilesData, payload: IUploadedFilesData } |

  { type: actionTypes.onDeleteUploadedData } |
  { type: actionTypes.onDeleteUploadedFile, payload: number};

export default Action;