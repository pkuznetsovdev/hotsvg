import actionTypes from './actionTypes';
import { Action, SvgArray } from '../interfaces';
import { generateSvgFileArr, getContentData1 } from '../services/sprite-service';
import { generateTestSprites } from '../utils/generate-test-sprites';

/*  Generate Sprites  */
const generateSpriteFilesStarted = (): Action => ({ type: actionTypes.onUpdateSpriteFilesStart });

const generateSpriteFilesSuccess = (data: SvgArray): Action => ({
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

const loadData = (dispatch: any) => (newFiles: File[]) => {
    dispatch(generateSpriteFilesStarted());
    generateSvgFileArr(newFiles)
      .then(files => {
        const parsedArray = getContentData1(files);
        if (!parsedArray) throw Error('Unable to parse the file');
        dispatch(generateSpriteFilesSuccess(parsedArray))
      })
      .catch(error => dispatch(generateSpriteFilesFail(error)));
};

export {
  loadData,
  loadTestData,
  deleteUploadedData
};