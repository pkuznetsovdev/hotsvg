import actionTypes from './actionTypes';
import { Action, ISpriteList, IUploadedFiles } from '../interfaces';
import { parseSpriteFilesToSpriteListItems } from '../services/sprite-service';
import { generateTestSprites } from '../utils/generate-test-sprites';

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

const loadTestData = (dispatch: any) => () => {
  dispatch(generateSpriteFilesStarted());
  generateTestSprites()
    .then(spriteFiles => dispatch(generateSpriteFilesSuccess(spriteFiles)));
};

const loadData = (dispatch: any) => (newFiles: IUploadedFiles) => {
    dispatch(generateSpriteFilesStarted());
    parseSpriteFilesToSpriteListItems(newFiles)
      .then(spriteFiles => dispatch(generateSpriteFilesSuccess(spriteFiles)))
      .catch(error => dispatch(generateSpriteFilesFail(error)));
};

export {
  loadData,
  loadTestData,
  deleteUploadedData
};