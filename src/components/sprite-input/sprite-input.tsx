import React, { Component } from 'react';
import { State, IUploadedState } from '../../interfaces';
import { loadData } from '../../actions';
import { connect } from 'react-redux';

interface Props {
  loadData: (e: any, data?: any) => any,
  uploadedData: IUploadedState
}

class SpriteInput extends Component<Props> {

  /**
   * TODO: Нужен другой способ для передачи стейта в action для проверки новых файлов*/
  onUploadData = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.loadData(e, this.props.uploadedData)
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

const mapStateToProps = ({uploadedData}: State) => ({uploadedData});

const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(SpriteInput);