export type UploadedListItem = {
  content: string,
  title: string,
  id: number,
  spriteData: {
    name: string,
    lastModified: number
  }
};

export type UploadedListType = UploadedListItem[];

export type SvgIcon = {
  svg: string
};

