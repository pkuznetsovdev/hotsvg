import React, { Component } from 'react';

/*  Utils */
import appendXMLToDom from '../../utils/appendXMLToDom';

/*  Styles  */
import './svg-list.scss';

type Props = {
  icon: string;
  id: number;
  title: string;
};

class SvgList extends Component<Props> {

  list = React.createRef<HTMLUListElement>();

  componentDidMount(): void {
    if (!this.list || !this.list.current) return;
    appendXMLToDom(this.list.current, this.props.icon, 'icon');
  }

  render() {
    return (
      <ul className="svg-list" id={`${this.props.id}`} ref={this.list}>
        <li key={0} className="svg-list__title"><h3>{this.props.title}</h3></li>
      </ul>
    );
  }
}

export default SvgList;
