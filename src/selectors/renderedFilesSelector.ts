import { State } from '../interfaces/';

const renderedFilesSelector = ({ generatedSpriteFiles: { spriteList } }: State): string[] => {
  return spriteList.map(spriteFile => spriteFile.title);
};

export default renderedFilesSelector;
