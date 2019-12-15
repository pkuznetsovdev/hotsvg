import { State } from '../interfaces/';

const renderedFilesSelector = ({ generatedFiles: { svgArray } }: State): {title: string, id: number}[] => {
  return svgArray.map(({title, id}) => ({title, id}));
};

export default renderedFilesSelector;
