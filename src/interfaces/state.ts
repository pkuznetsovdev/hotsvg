import { SvgIcon, SvgSprite } from './../interfaces';

export type SvgArray = Array<SvgIcon | SvgSprite>

export interface IGeneratedFiles {
  svgArray: SvgArray,
  loading: boolean,
  error: string | null,
}

export default interface State {
  generatedFiles: IGeneratedFiles,
}

