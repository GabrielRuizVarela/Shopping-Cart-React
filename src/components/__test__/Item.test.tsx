/** @jest-environment jsdom */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../Item';
import Context from '../context/Context';

interface ItemProps {
  name: string;
  description: {
    color: string;
    description: string;
  }[];
  colors: {
    color: string;
    image: string;
  }[];
  price: number;
  id: number;
}

describe.only('Item', () => {
  it('renders desciption correctly', () => {
    const { items, description } = useContext(Context);
    const item = items.find((element) => element.id === 1) as ItemProps;
    const { getByText } = render(
      <Item
        id={1}
        name={item.name}
        colors={item.colors}
        price={item.price}
        description={description}
      />,
    );
    const desc = getByText(description[1].description);
    expect(desc.textContent).toBeInTheDocument();
  });
  // it('renders the title correctly', () => {
  //   const { getByText } = render(
  //     <Item
  //       name="Item 1"
  //       description="This is item 1"
  //       image="https://picsum.photos/200"
  //       price={10}
  //     />,
  //   );
  //   const title = getByText('Item 1');
  //   expect(title.textContent).toMatch('Item 1');
  // });
  // it('renders the price correctly', () => {
  //   const { getByText } = render(
  //     <Item
  //       name="Item 1"
  //       description="This is item 1"
  //       image="https://picsum.photos/200"
  //       price={10}
  //     />,
  //   );
  //   const price = getByText('$10');
  //   expect(price.textContent).toMatch('$10');
  // });
});

// describe('Item', () => {
//   it('plus button renders correctly after click', async () => {
//     render(<Item />);
//     const button = screen.getByRole('button', { name: '+' });
//     await userEvent.click(button);
//     const count = screen.getByRole('spinbutton');
//     expect(count.value).toMatch('2');
//   });
//   it('minus button renders correctly after click', async () => {
//     render(<Item />);
//     const button = screen.getByRole('button', { name: '-' });
//     await userEvent.click(button);
//     const count = screen.getByRole('spinbutton');
//     expect(count.value).toMatch('0');
//   });
// });
