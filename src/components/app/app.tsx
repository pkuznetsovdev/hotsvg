import React from 'react';
import './app.scss';

const App: React.FC = () => {
  const hello = {
    sda: 123,
    asda: 214,
  };

  console.log(hello);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://designshop-6aa0.kxcdn.com/photos/hello-cartoons-comic-send-greeting-card-online-2526_2.jpg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
