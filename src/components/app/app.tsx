import React from 'react';

/*  Styles  */
import './app.scss';

/*  Components  */
import Header from '../header';
import UploadedSpriteList from '../../containers/uploaded-sprite-list';
import SpriteListNavigation from '../sprite-list-navigation';

const App: React.FC = () => (
  <div className="app">
    <Header />

    <main className="main">
      <aside className="sidebar">
        <SpriteListNavigation/>
      </aside>
      <section className="content-wrapper">
        <section className="content">
          <UploadedSpriteList />
        </section>
      </section>
    </main>
  </div>
);

export default App;
