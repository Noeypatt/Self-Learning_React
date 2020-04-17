import React from 'react';
import Navbar from './componets/navbar';
import Header from './componets/header';
import Content from './componets/contents';
import Footer from './componets/footer';

function App() {
  return (
    <div className="wrap-index">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
