import actionTypes from '../actions/actionTypes';
import { Action, RejectedFile } from '../interfaces';

const updateRejectedFiles = (rejectedFiles: RejectedFile[], action: Action) => {
    switch (action.type) {
        case actionTypes.updateRejectedFiles:
            return action.payload;
        default :
            return rejectedFiles;
    }
};

export default updateRejectedFiles;