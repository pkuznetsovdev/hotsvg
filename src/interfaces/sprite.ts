export type ISpriteListItem = { spriteFile: string, title: string, id: number, spriteData: { name: string, lastModified: number} };
export type ISymbol = { id: string, title: string, viewBox: string };
export type ISvg = { svg: string };

export type ISpriteList = ISpriteListItem[];