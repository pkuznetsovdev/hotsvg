import { SvgFile } from '../interfaces';

const loadTestSvgFileArr = async () => {
  const testSpriteFiles = await fetchTestFiles().then(res => res);
  return generateTestSvgFileArr(testSpriteFiles);
};

const fetchTestFiles = async () => {

  const urlTestSprite = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/sprites/regular.svg";
  const urlTestSvg = "https://s.cdpn.io/3/kiwi.svg";

  return [
    await fetch(urlTestSprite).then(res => res.text()),
    await fetch(urlTestSvg).then(res => res.text())
  ];
};

function generateTestSvgFileArr(filesArr: string[]): SvgFile[] {
  return filesArr.map((file, id) => {
    const title = `test-file #${1 + id}`;
    return new SvgFile(
      file,
      title,
      id,
      title,
      new Date().getDate(),
    )
  });
}

export {
  loadTestSvgFileArr
}