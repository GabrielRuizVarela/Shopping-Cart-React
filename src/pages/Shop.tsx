import React, { useContext } from 'react';
import Context from '../components/context/Context';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
import '../styles/Shop.scss';

function Shop() {
  const { items, description } = useContext(Context);
  return (
    <div className="shop-page">
      <Navbar />
      <div className="Shop">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            colors={item.colors}
            price={item.price}
            description={description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
