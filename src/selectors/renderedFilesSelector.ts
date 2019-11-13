import { State } from '../interfaces/';

const renderedFilesSelector = ({ generatedSpriteFiles: { spriteList } }: State): {title: string, id: number}[] => {
  return spriteList.map(({title, id}) => ({title, id}));
};

export default renderedFilesSelector;
