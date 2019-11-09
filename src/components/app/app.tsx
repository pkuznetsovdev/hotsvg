import React from 'react';

/*  Styles  */
import './app.scss';

/*  Components  */
import Header from '../header';
import UploadedSpriteList from '../../containers/uploaded-sprite-list';
import SpriteListNav from '../sprite-list-navigation'

const App: React.FC = () => (
  <div className="app">
    <Header />

    <main className="container">
      <SpriteListNav />
      <UploadedSpriteList />
    </main>
  </div>
);

export default App;
