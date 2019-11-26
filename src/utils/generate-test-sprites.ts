import { SvgFile } from '../interfaces';

const generateTestSprites = async () => {
  const testSpriteFiles = await fetchTestSprites().then(res => res);
  return parseTestSpriteFilesToSpriteListItems(testSpriteFiles);
};

const fetchTestSprites = async () => {

  const urlTestSprite = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/sprites/regular.svg";
  const urlTestSvg = "https://s.cdpn.io/3/kiwi.svg";

  const testSpriteResponse = await fetch(urlTestSprite);
  const testSprite = await testSpriteResponse.text();

  const testSvgResponse = await fetch(urlTestSvg);
  const testSvg = await testSvgResponse.text();

  return [testSprite, testSvg];
};

function parseTestSpriteFilesToSpriteListItems(filesArr: string[]): SvgFile[] {
  return filesArr.map((file, id) => {
    const title = 'test-file' + (1 + id);
    return {
      src: file,
      title,
      id,
      data: {
        name: title,
        lastModified: Date.now()
      },
    };
  });
}

export {
  generateTestSprites
}