import React from 'react';

/*  Styles  */
import './app.scss';

/*  Components  */
import Header from '../header';
import GeneratedSpriteList from '../../containers/generated-sprite-list';

const App: React.FC = () => (
  <div className="app">
    <Header />
    <GeneratedSpriteList />
  </div>
);

export default App;
