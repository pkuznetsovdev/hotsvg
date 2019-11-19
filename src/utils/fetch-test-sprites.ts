const fetchTestSprites = async () => {

  const urlTestSprite = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/sprites/regular.svg";
  const urlTestSvg = "https://s.cdpn.io/3/kiwi.svg";

  const testSpriteResponse = await fetch(urlTestSprite);
  const testSprite = await testSpriteResponse.text();

  const testSvgResponse = await fetch(urlTestSvg);
  const testSvg = await testSvgResponse.text();

  return [testSprite, testSvg];
};

export {
  fetchTestSprites
};