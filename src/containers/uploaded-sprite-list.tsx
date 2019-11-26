import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, UploadedListType } from '../interfaces';
import { generatedFilesSelector } from '../selectors';
import { loadTestData } from '../actions';
import { getContentData } from '../services/sprite-service';

/*  Components  */
import SpriteList from '../components/sprite-list';
import SvgList from '../components/svg-list';


interface IProps {
  uploadedList: UploadedListType,
  loadTestData: () => void
}

interface IState {
  spriteList: UploadedListType
}

class UploadedSpriteList extends Component<IProps, IState> {

  state = {
    spriteList: [],
  };

  componentDidMount(): void {
    if (!this.props.uploadedList.length) {
      this.props.loadTestData();
    }
  }

  render() {

    const generatedList = this.props.uploadedList.map(({ content, id, title }) => {

      /*todo move to action before upload to store*/
      const generatedListItem = getContentData(content);
      if (!generatedListItem) return null;

      if (Array.isArray(generatedListItem)) {

        /*todo function insertSpriteToHTML*/
        const parser = new DOMParser();
        const spriteElement = parser.parseFromString(content, "text/xml");
        document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);

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
