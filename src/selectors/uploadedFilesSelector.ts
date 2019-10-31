import { State, IUploadedFiles } from '../interfaces/';

const uploadedFilesSelector = ({ uploadedData: { uploadedFiles } }: State): IUploadedFiles => {
  return uploadedFiles;
};

export default uploadedFilesSelector;