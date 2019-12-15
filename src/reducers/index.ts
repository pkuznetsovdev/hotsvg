import { Action, State } from '../interfaces';

import updateGeneratedFiles from './updateGeneratedFiles';

const initialState: State = {
  generatedFiles: {
    svgArray: [],
    loading: false,
    error: null,
  },
};

const rootReducer = (state: State = initialState, action: Action): State => ({
  generatedFiles: updateGeneratedFiles(state.generatedFiles, action),
});

export default rootReducer;