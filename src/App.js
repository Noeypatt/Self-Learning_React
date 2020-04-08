import React from 'react';
import NavBar from './components/navBar';
import Header from './Header';

function App() {
  return (
    <div className="warp-index">
      <NavBar />
      <div className="warp-index-content">
        <Header />
      </div>

    </div>
  );
}

export default App;
