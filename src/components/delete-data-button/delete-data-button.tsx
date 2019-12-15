import React from 'react';
import { connect } from 'react-redux';

/*  Utils */
import { State, SvgArray } from '../../interfaces';
import { generatedFilesSelector } from '../../selectors';
import { deleteUploadedData } from '../../actions';

/*  Styles  */
import './delete-data-button.scss';

type Props = {
  spriteList: SvgArray,
  onDeleteData: any
}

const DeleteDataButton = ({spriteList, onDeleteData}: Props) => {
  if (!spriteList.length) return null;

  return (
    <button type="button"
            className="btn-text btn-cancel"
            onClick={onDeleteData}
    >
      Clear
    </button>
  );
};

const mapStateToProps = (state: State) => ({
  spriteList: generatedFilesSelector(state),
});

const mapDispatchToProps = {
  onDeleteData: deleteUploadedData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDataButton);