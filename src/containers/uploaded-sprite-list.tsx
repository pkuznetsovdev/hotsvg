import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, ISpriteList } from '../interfaces';
import { generatedFilesSelector } from '../selectors';

/*  Components  */
import SpriteList from '../components/sprite-list';
import { generateTestSprites } from '../utils/generate-test-sprites';
import { onUploadTestData } from '../services/loader-service';


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
      generateTestSprites()
        .then(res => onUploadTestData(res));
    }
  }

  render () {
    return <SpriteList spriteArray={this.props.spriteList} />;
  }
}

const mapStateToProps = (state: State) => ({
  spriteList: generatedFilesSelector(state),
});

export default connect(mapStateToProps)(UploadedSpriteList);
