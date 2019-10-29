import React, { Component } from 'react';
import { IUploadedFiles, State } from '../../interfaces';
import { loadData } from '../../actions';
import { connect } from 'react-redux';

interface Props {
  loadData: (e: any, data?: any) => any,
  uploadedFiles: IUploadedFiles,
}

type ILocalState = {
  uploadedFiles: IUploadedFiles
}

class SpriteInput extends Component<Props, ILocalState> {

  state = {
    uploadedFiles: this.props.uploadedFiles
  };

  onUploadData = (e: React.FormEvent<HTMLInputElement>) => {
    const {files} = e.target as HTMLInputElement;
    if (!files) return;
    let newFiles: IUploadedFiles = [];

    for (let i = 0, filesLength = files.length; i < filesLength ; i++) {
      newFiles.push(files[i]);
    }

    newFiles = filterNewFilesOnUpload(this.state.uploadedFiles, newFiles);

    if (newFiles.length) {
      this.props.loadData(newFiles);
      this.setState({uploadedFiles: this.props.uploadedFiles});
    }
  };

  render() {
    return (
      <label className="btn-solid header__input">
        <span>Pick or drop</span>
        <input type="file"
               multiple
               hidden
               onChange={this.onUploadData}
        />
      </label>
    );
  }
}

const mapStateToProps = ({uploadedData: {uploadedFiles}}: State) => ({uploadedFiles});

const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(SpriteInput);

const filterNewFilesOnUpload = (oldFilesArr: File[], NewFilesArr: File[]) => {
  return NewFilesArr.filter(newFile => {
    return !oldFilesArr.some(oldFile => {
      return oldFile.name === newFile.name || oldFile.lastModified === newFile.lastModified
    });
  })
};