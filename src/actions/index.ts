import actionTypes from './actionTypes';

import { Action, SvgIcon, SvgSprite } from '../interfaces';
import { generateSvgFileArr, getContentData } from '../services/sprite-service';
import { loadTestSvgFileArr } from '../utils/generate-test-sprites';

import filterNewFilesOnUpload from '../utils/filter-uploaded-files';


/*  Generate Sprites  */
const generateSpriteFilesStarted = (): Action => ({ type: actionTypes.onUpdateSpriteFilesStart });

const generateSpriteFilesSuccess = (data: SvgIcon | SvgSprite): Action => ({
  type: actionTypes.onUpdateSpriteFilesSuccess,
  payload: data,
});

const generateSpriteFilesFail = (error: string): Action => ({
  type: actionTypes.onUpdateSpriteFilesFail,
  payload: error,
});

/*  Delete Uploaded Data  */
const deleteUploadedData = (): Action => ({
  type: actionTypes.onDeleteUploadedData,
});

const loadTestData = (dispatch: any) => () => {
  dispatch(generateSpriteFilesStarted());
  loadTestSvgFileArr()
    .then(testFiles =>
      testFiles.forEach(testFile => {
        const parsedFile = getContentData(testFile);
        if (!parsedFile) throw Error('Unable to parse the file');
        dispatch(generateSpriteFilesSuccess(parsedFile));
      })
    );
};

const loadData = (dispatch: any) => (newFiles: File[]) => {
  dispatch(generateSpriteFilesStarted());
  generateSvgFileArr(newFiles)
    .then(svgFiles => {
      const newSvgFiles = filterNewFilesOnUpload(svgFiles);
      newSvgFiles.forEach(svgFile => {
        const parsedFile = getContentData(svgFile);
        if (!parsedFile) throw Error('Unable to parse the file');
        dispatch(generateSpriteFilesSuccess(parsedFile));
      });
    })
    .catch(error => dispatch(generateSpriteFilesFail(error)));
};

export {
  loadData,
  loadTestData,
  deleteUploadedData,
};