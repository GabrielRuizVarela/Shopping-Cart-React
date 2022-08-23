import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ItemDetail from '../pages/ItemDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
