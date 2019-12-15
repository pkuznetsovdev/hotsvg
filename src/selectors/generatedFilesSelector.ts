import { State, SvgArray } from '../interfaces/';

const generatedFilesSelector = ({ generatedFiles: { svgArray } }: State): SvgArray => {
  return svgArray;
};

export default generatedFilesSelector;