import actionTypes from '../actions/actionTypes';
import { Action, UploadedState } from '../interfaces';

const initialState = {
  uploadedFiles: [],
  loading: false,
  error: null,
};

const updateLoadedData = (uploadedData: UploadedState, action: Action) => {
  if (uploadedData === undefined) {
    return {
      ...initialState
    };
  }

  switch (action.type) {
    case actionTypes.onUploadStart :
      return {
        ...uploadedData,
        loading: true,
      };
    case actionTypes.onUploadSuccess :
      return {
        uploadedFiles: [...uploadedData.uploadedFiles, ...action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.onUploadFail :
      console.log(action.payload);
      return {
        uploadedFiles: uploadedData.uploadedFiles,
        loading: false,
        error: action.payload,
      };
    default :
      return {
        ...initialState
      };
  }
};

export default updateLoadedData;