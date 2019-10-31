import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, IUploadedFiles } from '../interfaces';
import { uploadedFilesSelector } from '../selectors';
import SpriteList from '../components/sprite-list/sprite-list';


interface IProps {
  uploadedFiles: IUploadedFiles
}

type ISpriteListItem = { spriteFile: string, title: string };
type ISpriteList = ISpriteListItem[];

interface ILocalState {
  uploadedFiles: ISpriteListItem[]
}

class UploadedSpriteList extends Component<IProps, ILocalState> {
  state = {
    uploadedFiles: [],
  };

  componentDidMount() {
    this.onFilesLoaded()
      .then((res: ISpriteList) => {
        this.setState({ uploadedFiles: res });
      });
  }

  onFilesLoaded = async () => {
    return await extractDataFromSprite(this.props.uploadedFiles);
  };

  /*shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<ILocalState>, nextContext: any): boolean {
    if (this.state.uploadedFiles !== nextProps.uploadedFiles) {
      this.onFilesLoaded()
        .then((spriteList: ISpriteList) => {
          this.setState({ uploadedFiles: spriteList });
        });
      return true;
    }
    return false;
  }*/

  render() {
    return <SpriteList spriteArray={this.state.uploadedFiles} />;
  }
}

/*const UploadedSpriteList1 = ({uploadedFiles}: IProps) => {

  let spriteList: ISpriteList;

  extractDataFromSprite(uploadedFiles)
      .then((res:ISpriteList) => spriteList = res);

  console.log(123);
  console.log(spriteList);

  return <SpriteList spriteArray={spriteList} />;
};*/

const mapStateToProps = (state: State) => ({
  uploadedFiles: uploadedFilesSelector(state),
});

export default connect(mapStateToProps)(UploadedSpriteList);

function extractDataFromSprite(spritesArr: IUploadedFiles): Promise<ISpriteList> {
  return Promise.all(spritesArr.map(file => {
    return new Promise(res => {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        const parser = new DOMParser();
        const result = reader.result as string;
        const spriteElement = parser.parseFromString(result, 'text/xml');
        spriteElement.documentElement.style.display = 'none';
        document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);
        res({ spriteFile: result, title: file.name });
      };
    });
  }));
}