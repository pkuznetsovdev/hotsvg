import { SvgIcon, SvgSymbol } from './../interfaces';

export type SvgArray = Array<SvgIcon | SvgSymbol>

export interface IGeneratedFiles {
  svgArray: SvgArray,
  loading: boolean,
  error: string | null,
}

export default interface State {
  generatedFiles: IGeneratedFiles
}

