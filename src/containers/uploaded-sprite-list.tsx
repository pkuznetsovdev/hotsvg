import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

/*  Utils  */
import { State, SvgArray, svgTypes } from '../interfaces';
import { generatedFilesSelector } from '../selectors';
import { loadTestData } from '../actions';

/*  Components  */
import SpriteList from '../components/sprite-list';
import SvgList from '../components/svg-list';
import SearchInput from '../components/search-input';

type Props = {
  uploadedList: SvgArray,
  loadTestData: () => void,
}

const UploadedSpriteList = (props: Props) => {

  const [value, setValue] = useState('');

  useEffect(() => {
    if (!props.uploadedList.length) {
      props.loadTestData();
    }
  },[]);

  const onChangeFilter = (value: string) => {
    setValue(value);
  };

  const regExp = new RegExp(value,"gi");

  const generatedList = props.uploadedList.map(item => {
    const { id, title } = item;

    switch (item.type) {
      case svgTypes.sprite: {
        return <SpriteList symbolList={item.symbols} id={id} title={title} key={id} regExp={regExp}/>;
      }
      case svgTypes.icon: {
        if (title.search(regExp) === -1) {
          return null;
        }
        return <SvgList icon={item.icon} id={id} title={title} key={id} />;
      }
      default:
        return null;
    }
  });


  return (
    <>
      {!props.uploadedList.length || <SearchInput value={value} onChangeFilter={onChangeFilter} />}
      <section className="content">
        {generatedList}
      </section>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  uploadedList: generatedFilesSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadTestData: loadTestData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadedSpriteList);
