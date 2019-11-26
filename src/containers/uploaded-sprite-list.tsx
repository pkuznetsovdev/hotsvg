import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, SvgFile } from '../interfaces';
import { generatedFilesSelector } from '../selectors';
import { loadTestData } from '../actions';
import { getContentData } from '../services/sprite-service';
import appendXMLToDom from '../utils/appenXMLToDom';

/*  Components  */
import SpriteList from '../components/sprite-list';
import SvgList from '../components/svg-list';


interface IProps {
  uploadedList: SvgFile[],
  loadTestData: () => void
}

class UploadedSpriteList extends Component<IProps> {

  componentDidMount(): void {
    if (!this.props.uploadedList.length) {
      this.props.loadTestData();
    }
  }

  render() {

    const generatedList = this.props.uploadedList.map(({ src, id, title }) => {

      /*todo move to action before upload to store*/
      const generatedListItem = getContentData(src);
      if (!generatedListItem) return null;

      if (Array.isArray(generatedListItem)) {
        appendXMLToDom(document.body, src);
        return <SpriteList symbolList={generatedListItem} id={id} title={title} key={id} />;
      } else {
        return <SvgList svg={generatedListItem} id={id} title={title} key={id} />;
      }
    });


    return <>{generatedList}</>;
  }
}

const mapStateToProps = (state: State) => ({
  uploadedList: generatedFilesSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadTestData: loadTestData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadedSpriteList);
