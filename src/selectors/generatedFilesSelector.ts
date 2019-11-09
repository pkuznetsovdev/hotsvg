import { State, ISpriteList } from '../interfaces/';

const generatedFilesSelector = ({ generatedSpriteFiles: { spriteList } }: State): ISpriteList => {
  console.log(spriteList);
  return spriteList;
};

export default generatedFilesSelector;