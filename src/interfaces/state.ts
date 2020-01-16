import { SvgIcon, SvgSprite, RejectedFile } from './../interfaces';

export type SvgArray = Array<SvgIcon | SvgSprite>

export type GeneratedFiles = {
  svgArray: SvgArray,
  loading: boolean,
  error: string,
}

export default interface State {
  generatedFiles: GeneratedFiles,
  rejectedFiles: RejectedFile[],
}

