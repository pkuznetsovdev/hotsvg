import React from 'react';
import { connect } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

/*  Utils */
import { renderedFilesSelector } from '../../selectors';
import { State } from '../../interfaces';

/*  Styles  */
import './sprite-list-navigation.scss';

type Props = {
  spriteNames: { title: string, id: number }[]
}

const SpriteListNavigation = ({ spriteNames }: Props) => {

  return (
    <nav className="nav">
      <ul className="nav-list">
        {spriteNames.map(({ title, id }) => {
          return <li key={id} className="nav-list__item">
            <HashLink to={`#${id}`}
                      scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                      className="nav-list__link"
            >{title}</HashLink>
          </li>;
        })}
      </ul>
    </nav>
  );
};

function mapStateToProps(state: State) {
  return {
    spriteNames: renderedFilesSelector(state),
  };
}

export default connect(
  mapStateToProps,
)(SpriteListNavigation);