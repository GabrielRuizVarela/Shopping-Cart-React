import React, { useContext } from 'react';
import Context from '../components/context/Context';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';

function Shop() {
  const { items } = useContext(Context);
  return (
    <div className="Shop">
      <Navbar />
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Shop;
