import {State} from "../interfaces";

export default function rejectedFilesSelector ({ rejectedFiles}: State) {
    return rejectedFiles;
};