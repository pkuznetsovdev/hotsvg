import React from 'react';

/*  Styles  */
import './app.scss';

/*  Components  */
import Header from '../header';
import UploadedSpriteList from '../../containers/uploaded-sprite-list';

const App: React.FC = () => (
  <div className="app">
    <Header />
    <UploadedSpriteList />
  </div>
);

export default App;
