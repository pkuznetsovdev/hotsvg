import { ISpriteList } from '../interfaces';

function parseTestSpriteFilesToSpriteListItems(filesArr: string[]): ISpriteList {
  return filesArr.map((file, id) => {
    const title = 'test-file' + (1 + id);
    return {
      spriteFile: file,
      title,
      id,
      spriteData: {
        name: title,
        lastModified: Date.now()
      },
    };
  });
}

export {
  parseTestSpriteFilesToSpriteListItems
}