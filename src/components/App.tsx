import React from 'react';
import Item from './Item';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar logo="logo" />
      <Item title="Item 1" description="This is item 1" image="https://picsum.photos/200" price={10} />
      <Footer />
    </div>

  );
}

export default App;
