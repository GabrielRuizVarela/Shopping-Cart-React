import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Item from './Item';

// new context for logo

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>

          {/* <Route path="/:id" element={<Item />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
