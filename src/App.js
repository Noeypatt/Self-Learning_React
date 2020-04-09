import React from 'react';
import NavBar from './components/navBar';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="warp-index">
      <NavBar />
      <div className="warp-index-content">
        <Header />
        <Content />
      </div>

    </div>
  );
}

export default App;
