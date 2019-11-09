import actionTypes from '../actions/actionTypes';
import { Action, IUploadedState } from '../interfaces';

const initialState: IUploadedState = {
    uploadedFiles: [],
    loading: false,
    error: null,
};

const updateLoadedData = (uploadedData: IUploadedState, action: Action) => {
  switch (action.type) {
    case actionTypes.onUploadStart :
      return {
        ...uploadedData,
        loading: true,
        error: null,
      };
    case actionTypes.onUploadSuccess :
      return {
        uploadedFiles: [...uploadedData.uploadedFiles, ...action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.onUploadFail :
      return {
        uploadedFiles: uploadedData.uploadedFiles,
        loading: false,
        error: action.payload,
      };
    case actionTypes.onDeleteUploadedData :
      return initialState;
    default :
      return uploadedData;
  }
};

export default updateLoadedData;