import { Action, State } from '../interfaces';

import updateGeneratedSpriteFiles from './updateGeneratedSpriteFiles'

const initialState: State = {
  /*uploadedData: {
    uploadedFiles: [],
    loading: false,
    error: null,
  },*/
  generatedSpriteFiles: {
    spriteList: [],
    loading: false,
    error: null,
  },
};

const rootReducer = (state: State = initialState, action: Action): State => ({
  //uploadedData: updateLoadedData(state.uploadedData, action),
  generatedSpriteFiles: updateGeneratedSpriteFiles(state.generatedSpriteFiles, action),
});

export default rootReducer;