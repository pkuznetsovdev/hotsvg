import actionTypes from '../actions/actionTypes';
import { Action, GeneratedFiles } from '../interfaces';
import {initialGeneratedFilesState} from "./index";

const updateGeneratedFiles = (generatedSpriteFiles: GeneratedFiles, action: Action) => {
  switch (action.type) {
    case actionTypes.updateSpriteFilesStart :
      return {
        ...generatedSpriteFiles,
        loading: true,
        error: '',
      };
    case actionTypes.updateSpriteFilesSuccess :
      return {
        svgArray: [...generatedSpriteFiles.svgArray, ...action.payload],
        loading: false,
        error: '',
      };
    case actionTypes.updateSpriteFilesFail :
      return {
        ...generatedSpriteFiles,
        loading: false,
        error: action.payload,
      };
    case actionTypes.deleteUploadedData :
      return initialGeneratedFilesState;
    default :
      return generatedSpriteFiles;
  }
};

export default updateGeneratedFiles;
