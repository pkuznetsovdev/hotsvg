import State, { IUploadedFiles } from '../interfaces/state';

const uploadedSpritesSelector = ({ uploadedData: { uploadedFiles } }: State): IUploadedFiles => {
  return uploadedFiles;
};

export default uploadedSpritesSelector;