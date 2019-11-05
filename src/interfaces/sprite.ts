export type ISpriteListItem = {spriteFile: string, title: string};
export type ISymbol = {id: string, title: string, viewBox: string};

interface ISpriteList {
  spriteArray: ISpriteListItem[]
}

export default ISpriteList;