import actionTypes from '../actions/actionTypes';
import { Action, IGeneratedFiles } from '../interfaces';
import filterNewFilesOnUpload from '../utils/filter-uploaded-files';

const initialState = {
  svgFileArray: [],
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
        svgArray: [...generatedSpriteFiles.svgArray, ...filterNewFilesOnUpload(generatedSpriteFiles.svgArray, action.payload)],
        loading: false,
        error: null,
      };
    case actionTypes.onUpdateSpriteFilesFail :
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