import actionTypes from './actionTypes';
import { Action, ISpriteList, IUploadedFiles } from '../interfaces';
import { extractDataFromSprite } from '../services/sprite-service';

/*  Upload  */
const uploadStarted = (): Action => ({ type: actionTypes.onUploadStart });

const uploadSuccess = (data: IUploadedFiles): Action => ({
  type: actionTypes.onUploadSuccess,
  payload: data,
});

const uploadFail = (error: string): Action => ({
  type: actionTypes.onUploadFail,
  payload: error,
});

/*  Generate Sprites  */
const generateSpriteFilesStarted = (): Action => ({ type: actionTypes.onUpdateSpriteFilesStart });

const generateSpriteFilesSuccess = (data: ISpriteList): Action => ({
  type: actionTypes.onUpdateSpriteFilesSuccess,
  payload: data,
});

const generateSpriteFilesFail = (error: string): Action => ({
  type: actionTypes.onUpdateSpriteFilesFail,
  payload: error,
});

/*  Delete Uploaded Data  */
const deleteUploadedData = (): Action => ({
  type: actionTypes.onDeleteUploadedData
});

const loadData = (newFiles: IUploadedFiles) => (dispatch: any) => {
  dispatch(uploadStarted());

  if (newFiles) {
    dispatch(uploadSuccess(newFiles));
    dispatch(generateSpriteFilesStarted());
    extractDataFromSprite(newFiles)
      .then(spriteFiles => dispatch(generateSpriteFilesSuccess(spriteFiles)))
      .catch(error => dispatch(generateSpriteFilesFail(error)));
  } else {
    uploadFail('No new files, common..');
  }
};

export {
  loadData,
  deleteUploadedData
};