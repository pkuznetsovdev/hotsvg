import actionTypes from '../actions/actionTypes';
import { Action, IGeneratedFiles } from '../interfaces';

const initialState = {
  svgArray: [],
  loading: false,
  error: null,
};

const updateGeneratedFiles = (generatedSpriteFiles: IGeneratedFiles, action: Action) => {
  switch (action.type) {
    case actionTypes.onUpdateSpriteFilesStart :
      return {
        ...generatedSpriteFiles,
        loading: true,
        error: null,
      };
    case actionTypes.onUpdateSpriteFilesSuccess :
      return {
        svgArray: [...generatedSpriteFiles.svgArray, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.onUpdateSpriteFilesFail :
      console.log(action.payload);
      return {
        ...generatedSpriteFiles,
        loading: false,
        error: action.payload,
      };
    case actionTypes.onDeleteUploadedData :
      return initialState;
    default :
      return generatedSpriteFiles;
  }
};

export default updateGeneratedFiles;