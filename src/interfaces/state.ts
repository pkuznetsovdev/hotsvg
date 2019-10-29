export type IUploadedFiles = File[];

export interface IUploadedState {
  uploadedFiles: IUploadedFiles,
  loading: boolean,
  error: string | null,
}

export default interface State {
  uploadedData: IUploadedState,
}

