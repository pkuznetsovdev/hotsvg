// @ts-nocheck
import State, { IGeneratedFiles, IUploadedFilesData, SvgArray } from './state';
import Action from './action';
import SvgSymbol from './SvgSymbol';
import SvgFile from './SvgFile';
import SvgIcon from './SvgIcon';
import svgTypes from './svgTypes';

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
  IGeneratedFiles,
  IUploadedFilesData,
  SvgArray,
  Action,
  SvgSymbol,
  SvgSprite,
  SvgFile,
  SvgIcon,
  svgTypes,
};