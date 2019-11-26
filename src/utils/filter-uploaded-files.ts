import { SvgFile } from '../interfaces';

const filterNewFilesOnUpload = (spritesArr: SvgFile[], NewFilesArr: SvgFile[]) => {
  return NewFilesArr.filter(newFile => {
    return !spritesArr.some(sprite => {
      return sprite.data.name === newFile.data.name && sprite.data.lastModified === newFile.data.lastModified
    });
  })
};

export default filterNewFilesOnUpload;