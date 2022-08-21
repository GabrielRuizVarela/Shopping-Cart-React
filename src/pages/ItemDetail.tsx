import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import Context from '../components/context/Context';
import Footer from '../components/Footer';

function ItemDetail() {
  const { id } = useParams();
  const { items } = useContext(Context);
  const item = items.find((element) => element.id === Number(id));
  return (
    <div className="ItemDetail">
      <Navbar />
      {/* if item is not null then render item */}
      {item && (
        <Item
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      )}
      <Footer />
    </div>
  );
}

export default ItemDetail;
