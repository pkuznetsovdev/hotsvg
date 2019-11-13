import { State, ISpriteList } from '../interfaces/';

const generatedFilesSelector = ({ generatedSpriteFiles: { spriteList } }: State): ISpriteList => {
  return spriteList;
};

export default generatedFilesSelector;