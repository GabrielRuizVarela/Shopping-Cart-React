import React, { useContext } from 'react';
import Context from '../components/context/Context';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';

function Shop() {
  const { items, description } = useContext(Context);
  return (
    <div className="Shop">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default Shop;
