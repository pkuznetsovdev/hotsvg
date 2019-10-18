export type IUploadedFiles = File[];

export interface UploadedState {
  uploadedFiles: IUploadedFiles,
  loading: boolean,
  error: string | null,
}

export default interface State {
  uploadedData: UploadedState,
}

