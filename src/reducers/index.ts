import updateLoadedData from './updateLoadedData';
import { Action, State } from '../interfaces';

const initialState: State = {
  uploadedData: {
    uploadedFiles: [],
    loading: false,
    error: null,
  }
};

const rootReducer = (state: State = initialState, action: Action) => ({
  uploadedData: updateLoadedData(state.uploadedData, action)
});

export default rootReducer;