import actionTypes from '../actions/actionTypes';
import { Action, IGeneratedSprites } from '../interfaces';
import filterNewFilesOnUpload from '../utils/filter-uploaded-files';

const initialState = {
    spriteList: [],
    loading: false,
    error: null,
};

const updateGeneratedSpriteFiles = (generatedSpriteFiles: IGeneratedSprites, action: Action) => {
  switch (action.type) {
    case actionTypes.onUpdateSpriteFilesStart :
      return {
        ...generatedSpriteFiles,
        loading: true,
        error: null,
      };
    case actionTypes.onUpdateSpriteFilesSuccess :
      return {
        spriteList: [...generatedSpriteFiles.spriteList, ...filterNewFilesOnUpload(generatedSpriteFiles.spriteList, action.payload)],
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

export default updateGeneratedSpriteFiles;