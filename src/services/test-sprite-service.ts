const getTestSprites = async () => {
  //const [response] = await Promise.all([fetch('https://srv-file5.gofile.io/download/0d4qT5/symbol-defs.svg', {
  const response = await fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg');
  console.log(response);
  const json = await response.text();
  console.log(json);

  fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg")
    .then(response => response.text())
    .then(svg => console.log(svg));

  return [1,2,3];
};

export {
  getTestSprites
};