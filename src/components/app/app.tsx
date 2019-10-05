import React from 'react';

/*  Styles  */
import './app.scss';

/*  Components  */
import Header from '../header';
import SpriteList from '../sprite-list';

const App: React.FC = () => (
  <div className="app">
    <Header />
    <SpriteList />
  </div>
);

export default App;
