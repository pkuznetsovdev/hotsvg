import React from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, ISpriteList } from '../interfaces';
import { generatedFilesSelector } from '../selectors';

/*  Components  */
import SpriteList from '../components/sprite-list';


interface IProps {
  spriteList: ISpriteList
}

const UploadedSpriteList = (props: IProps) => {
  return <SpriteList spriteArray={props.spriteList} />;
};

const mapStateToProps = (state: State) => ({
  spriteList: generatedFilesSelector(state),
});

export default connect(mapStateToProps)(UploadedSpriteList);
