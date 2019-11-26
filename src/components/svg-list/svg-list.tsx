import React, { Component } from 'react';

/*  Styles  */
import './svg-list.scss';

type Props = {
  svg: string,
  title: string,
  id: number,
};

class SvgList extends Component<Props> {

  list = React.createRef<HTMLUListElement>();

  componentDidMount(): void {
    if (!this.list || !this.list.current) return;

    /*todo function insertSVGToHTML*/
    const parser = new DOMParser();
    const icon = parser.parseFromString(this.props.svg, "text/xml").documentElement;
    icon.setAttribute('class', 'icon');

    this.list.current.appendChild(icon);
  }

  render() {
    return (
      <ul className="svg-list" id={`${this.props.id}`} ref={this.list}>
        <li key={0} className="svg-list__title"><h3>{this.props.title}</h3></li>
      </ul>
    );
  }
};

export default SvgList;
