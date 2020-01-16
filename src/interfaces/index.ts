// @ts-nocheck
import State, { GeneratedFiles, SvgArray } from './state';
import Action from './action';
import SvgSymbol from './SvgSymbol';
import SvgFile from './SvgFile';
import SvgIcon from './SvgIcon';
import svgTypes from './svgTypes';
import RejectedFile, {ErrorTypes} from './errorTypes';

type SvgSprite = {
  type: svgTypes.sprite,
  id: number,
  title: string,
  data: {
    name: string,
    lastModified: number
  };
  symbols: SvgSymbol[]
}

export {
  State,
  GeneratedFiles,
  //IUploadedFilesData,
  SvgArray,
  Action,
  SvgSymbol,
  SvgSprite,
  SvgFile,
  SvgIcon,
  svgTypes,
  RejectedFile,
  ErrorTypes,
};