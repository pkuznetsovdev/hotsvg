import { UploadedListType } from './sprite';

export type UploadedFiles = File[];

export interface IUploadedState {
  uploadedFiles: UploadedFiles,
  loading: boolean,
  error: string | null,
}

export interface IGeneratedSprites {
  spriteList: UploadedListType,
  loading: boolean,
  error: string | null,
}

export default interface State {
  //uploadedData: IUploadedState,
  generatedSpriteFiles: IGeneratedSprites
}

