import React from 'react';
import { connect } from 'react-redux';

/*  Utils */
import { renderedFilesSelector } from '../../selectors';
import {State} from '../../interfaces'

type Props = {
  spriteNames: any[]
}

const SpriteListNavigation = ({spriteNames}: Props) => {
  console.log(spriteNames);

  return (
    <ul>
      {spriteNames.map( title => {
        return <li>{title}</li>
      })}
    </ul>
  );
};

function mapStateToProps(state: State) {
  return {
    spriteNames: renderedFilesSelector(state)
  };
}

export default connect(
  mapStateToProps,
)(SpriteListNavigation);