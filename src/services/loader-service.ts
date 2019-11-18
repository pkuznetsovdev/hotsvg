import { ISpriteList, IUploadedFiles } from '../interfaces';
import store from '../store';

import { loadData } from '../actions';

const onUploadData = (newFiles: IUploadedFiles) => {
  const {spriteList} = store.getState().generatedSpriteFiles;
  newFiles = filterNewFilesOnUpload(spriteList, newFiles);
  /* todo bad code - no dispatch*/
  if (newFiles.length) {
    loadData(newFiles)(store.dispatch);
  }
};

const filterNewFilesOnUpload = (spritesArr: ISpriteList, NewFilesArr: File[]) => {
  return NewFilesArr.filter(newFile => {
    return !spritesArr.some(sprite => {
      return sprite.spriteData.name === newFile.name && sprite.spriteData.lastModified === newFile.lastModified
    });
  })
};

export {
  onUploadData
}