import { State, UploadedListType } from '../interfaces/';

const generatedFilesSelector = ({ generatedSpriteFiles: { spriteList } }: State): UploadedListType => {
  return spriteList;
};

export default generatedFilesSelector;