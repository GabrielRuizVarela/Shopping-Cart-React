import React from 'react';

const Context = React.createContext({
  logo: 'logo',
  items: [
    {
      id: 1,
      name: 'Item 1',
      price: 1.00,
      description: 'Item 1 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 2.00,
      description: 'Item 2 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Item 3',
      price: 3.00,
      description: 'Item 3 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Item 4',
      price: 4.00,
      description: 'Item 4 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Item 5',
      price: 5.00,
      description: 'Item 5 description',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Item 6',
      price: 6.00,
      description: 'Item 6 description',
      image: 'https://via.placeholder.com/150',
    },
  ],
});

export default Context;
