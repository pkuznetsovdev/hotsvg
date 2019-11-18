import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, ISpriteList } from '../interfaces';
import { generatedFilesSelector } from '../selectors';

/*  Components  */
import SpriteList from '../components/sprite-list';
import { getTestSprites } from '../services/test-sprite-service';


interface IProps {
  spriteList: ISpriteList
}

interface IState {
  spriteList: ISpriteList
}

class UploadedSpriteList extends Component<IProps, IState> {

  state = {
    spriteList: []
  };

  componentDidMount(): void {
    if (!this.props.spriteList.length) {
      console.log(getTestSprites());
    }
  }

  render () {
    return <SpriteList spriteArray={this.props.spriteList} />;
  }
};

const mapStateToProps = (state: State) => ({
  spriteList: generatedFilesSelector(state),
});

export default connect(mapStateToProps)(UploadedSpriteList);
