import { ISpriteList } from '../interfaces';

const filterNewFilesOnUpload = (spritesArr: ISpriteList, NewFilesArr: ISpriteList) => {
  return NewFilesArr.filter(newFile => {
    return !spritesArr.some(sprite => {
      return sprite.spriteData.name === newFile.spriteData.name && sprite.spriteData.lastModified === newFile.spriteData.lastModified
    });
  })
};

export default filterNewFilesOnUpload;