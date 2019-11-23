import React, { Component } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, UploadedListType, SvgSymbol, SvgSymbolList, UploadedListItem } from '../interfaces';
import { generatedFilesSelector } from '../selectors';

/*  Components  */
import SpriteList from '../components/sprite-list';
import { loadTestData } from '../actions';
import { getContentData } from '../services/sprite-service';
import SpriteListItem from '../components/sprite-list-item';


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

    const generatedList = this.props.uploadedList.map(({content, id, title}) => {
      const generatedListItem = getContentData(content);
      console.log(generatedListItem);
      if (!generatedListItem) return null;

      if (Array.isArray(generatedListItem)) {
        return this.generateSpriteList(generatedListItem, id, title);
      } else {

      }
    });


    return <SpriteList spriteList={this.props.uploadedList} />;
  }

  generateSpriteList = (symbolList: SvgSymbolList, id: number, title: string) => {
    const spriteItems = symbolList.map( (symbol: SvgSymbol, idx) => {
      return <SpriteListItem key={idx+1} symbol={symbol} />
    });

    return <ul className="sprite-list" key={id} id={`${id}`}>
      <li key={0} className="sprite-list__title"><h3>{title}</h3></li>
      {spriteItems}
    </ul>
  };

  generateSvgList = () => {

  };
}

const mapStateToProps = (state: State) => ({
  uploadedList: generatedFilesSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadTestData: loadTestData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadedSpriteList);
