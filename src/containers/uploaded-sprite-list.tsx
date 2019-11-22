import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, ISpriteList } from '../interfaces';
import { generatedFilesSelector } from '../selectors';

/*  Components  */
import SpriteList from '../components/sprite-list';
import { loadTestData } from '../actions';


interface IProps {
  spriteList: ISpriteList,
  loadTestData: () => void
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
      this.props.loadTestData();
    }
  }

  render () {
    return <SpriteList spriteArray={this.props.spriteList} />;
  }
}

const mapStateToProps = (state: State) => ({
  spriteList: generatedFilesSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadTestData: loadTestData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadedSpriteList);
