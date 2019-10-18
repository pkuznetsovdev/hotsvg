import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, IUploadedFiles } from '../interfaces';
import {uploadedSpritesSelector} from '../selectors'

/*  Components  */
import SpriteList from '../components/sprite-list';

interface LocalState {
  uploadedFiles: IUploadedFiles | any[]
}

interface LocalProps {
  uploadedFiles: IUploadedFiles
}

class GeneratedSpriteList extends Component<LocalProps, LocalState> {

  state: LocalState = {
    uploadedFiles: []
  };

  componentDidMount(): void {
    this.setState({uploadedFiles: this.props.uploadedFiles})
  }

  shouldComponentUpdate(nextProps: Readonly<LocalProps>, nextState: Readonly<LocalState>, nextContext: any): boolean {
    if (this.state.uploadedFiles !== nextProps.uploadedFiles) {
      this.setState({uploadedFiles: nextProps.uploadedFiles});
      return true;
    }
    return false;
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const spriteArray = (this.state.uploadedFiles as Array<any>).map( (file: any) => {
      return {
        title: file.name,
      }
    });

    return <SpriteList spriteArray={spriteArray} />
  }
}

const mapStateToProps = (state: State) => ({
  uploadedFiles: uploadedSpritesSelector(state)
});

export default connect(mapStateToProps)(GeneratedSpriteList);
