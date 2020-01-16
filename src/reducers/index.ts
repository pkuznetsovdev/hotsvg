import {Action, GeneratedFiles, RejectedFile, State} from '../interfaces';

import updateGeneratedFiles from './updateGeneratedFiles';
import updateRejectedFiles from './updateRejectedFiles';

export const initialGeneratedFilesState: GeneratedFiles = {
  svgArray: [],
  loading: false,
  error: '',
};

export const initialRejectedFilesState: RejectedFile[] = [];

const initialState: State = {
  generatedFiles: initialGeneratedFilesState,
  rejectedFiles: initialRejectedFilesState,
};

const rootReducer = (state: State = initialState, action: Action): State => ({
  generatedFiles: updateGeneratedFiles(state.generatedFiles, action),
  rejectedFiles: updateRejectedFiles(state.rejectedFiles, action),
});

export default rootReducer;