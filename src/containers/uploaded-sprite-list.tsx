import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, SvgArray, svgTypes} from '../interfaces';
import { generatedFilesSelector } from '../selectors';
import { loadTestData } from '../actions';
import appendXMLToDom from '../utils/appendXMLToDom';

/*  Components  */
import SpriteList from '../components/sprite-list';
import SvgList from '../components/svg-list';

interface IProps {
  uploadedList: SvgArray,
  loadTestData: () => void
}

class UploadedSpriteList extends Component<IProps> {

  componentDidMount(): void {
    if (!this.props.uploadedList.length) {
      this.props.loadTestData();
    }
  }

  render() {

    const generatedList = this.props.uploadedList.map(item => {
      const {id, title} = item;

      switch (item.type) {
        case svgTypes.sprite: {
          return <SpriteList symbolList={item.symbols} id={id} title={title} key={id} />;
        }
        case svgTypes.icon: {
          return <SvgList icon={item.icon} id={id} title={title} key={id} />;
        }
        default:
          return null;
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
