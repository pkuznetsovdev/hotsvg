import actionTypes from './actionTypes';
import { Action, ISpriteList, IUploadedFiles } from '../interfaces';
import { parseSpriteFilesToSpriteListItems } from '../services/sprite-service';
import { parseTestSpriteFilesToSpriteListItems } from '../services/test-sprite-service';

/*/!*  Upload  *!/
const uploadStarted = (): Action => ({ type: actionTypes.onUploadStart });

const uploadSuccess = (data: IUploadedFiles): Action => ({
  type: actionTypes.onUploadSuccess,
  payload: data,
});

const uploadFail = (error: string): Action => ({
  type: actionTypes.onUploadFail,
  payload: error,
});*/

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

const loadTestData = (testSprites: string[]) => (dispatch: any) => {
  dispatch(generateSpriteFilesStarted());
  const spriteFiles = parseTestSpriteFilesToSpriteListItems(testSprites);
  dispatch(generateSpriteFilesSuccess(spriteFiles));
};

const loadData = (newFiles: IUploadedFiles) => (dispatch: any) => {
  if (newFiles) {
    dispatch(generateSpriteFilesStarted());
    parseSpriteFilesToSpriteListItems(newFiles)
      .then(spriteFiles => dispatch(generateSpriteFilesSuccess(spriteFiles)))
      .catch(error => dispatch(generateSpriteFilesFail(error)));
  } else {
    dispatch(generateSpriteFilesFail('No new files, common..'));
  }
};

export {
  loadData,
  loadTestData,
  deleteUploadedData
};