import actionTypes from './actionTypes';
import { Action, UploadedListType, UploadedFiles } from '../interfaces';
import { parseFilesToSpriteList } from '../services/sprite-service';
import { generateTestSprites } from '../utils/generate-test-sprites';

/*  Generate Sprites  */
const generateSpriteFilesStarted = (): Action => ({ type: actionTypes.onUpdateSpriteFilesStart });

const generateSpriteFilesSuccess = (data: UploadedListType): Action => ({
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

const loadData = (dispatch: any) => (newFiles: UploadedFiles) => {
    dispatch(generateSpriteFilesStarted());
    parseFilesToSpriteList(newFiles)
      .then(spriteFiles => dispatch(generateSpriteFilesSuccess(spriteFiles)))
      .catch(error => dispatch(generateSpriteFilesFail(error)));
};

export {
  loadData,
  loadTestData,
  deleteUploadedData
};