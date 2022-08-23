import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ItemDetail from '../pages/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Shop />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
