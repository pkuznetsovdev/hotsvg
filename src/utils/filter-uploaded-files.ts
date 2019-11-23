import { UploadedListType } from '../interfaces';

const filterNewFilesOnUpload = (spritesArr: UploadedListType, NewFilesArr: UploadedListType) => {
  return NewFilesArr.filter(newFile => {
    return !spritesArr.some(sprite => {
      return sprite.spriteData.name === newFile.spriteData.name && sprite.spriteData.lastModified === newFile.spriteData.lastModified
    });
  })
};

export default filterNewFilesOnUpload;