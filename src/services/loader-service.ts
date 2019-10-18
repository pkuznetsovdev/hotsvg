export default class loadDataService {
  getDataOnInputChange() {

  }

  static getSpriteFromInput(fileList: any) {
    const length = fileList.length;
    const spriteArr = [];

    for (let i = 0; i < length; i++) {
      spriteArr.push(fileList[i])
    }
  }
}