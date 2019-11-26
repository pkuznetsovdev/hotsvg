import { State, SvgFile } from '../interfaces/';

const generatedFilesSelector = ({ generatedFiles: { svgArray } }: State): SvgFile[] => {
  return svgArray;
};

export default generatedFilesSelector;