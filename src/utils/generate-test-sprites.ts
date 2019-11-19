import { fetchTestSprites } from './fetch-test-sprites';

const generateTestSprites = async () => {
  const testSpriteFiles = await fetchTestSprites().then(res => res);
  return testSpriteFiles;
};

export {
  generateTestSprites
}