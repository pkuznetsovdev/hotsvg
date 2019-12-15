import React, { useEffect, useRef } from 'react';

/*  Utils */
import appendXMLToDom from '../../utils/appendXMLToDom';

/*  Styles  */
import './svg-list.scss';

type Props = {
  icon: string,
  id: number,
  title: string,
};

const SvgList = ({ icon, id, title }: Props) => {

  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!list || !list.current) return;
    appendXMLToDom(list.current, icon, 'icon');
  }, []);

  return (
    <ul className="svg-list" id={`${id}`} ref={list}>
      <li key={0} className="svg-list__title"><h3>{title}</h3></li>
    </ul>
  );
};

export default SvgList;
