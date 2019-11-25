import React, { DOMElement } from 'react';

type Props = {
  svg: string,
  title: string,
  id: number,
};

const SvgList = ({svg, title, id}: Props) => {
  const parser = new DOMParser();
  const svgIcon = parser.parseFromString(svg, "image/svg+xml").documentElement;

  // const div = document.createElement('div');
  // div.innerHTML = svg.trim();
  // const icon = div.firstElementChild;
  //(icon as HTMLElement).setAttribute('class','svg-list__icon');
  //svgIcon.setAttribute('class','svg-list__icon');
  //console.log(icon);

  return (
    <ul className="svg-list" id={`${id}`}>
      <li key={0} className="svg-list__title"><h3>{title}</h3></li>
      {/*{svgIcon}*/}
    </ul>
  );
};

export default SvgList;
