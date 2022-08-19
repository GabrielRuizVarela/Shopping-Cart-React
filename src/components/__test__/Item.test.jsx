/** @jest-environment jsdom */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../Item';

describe('Item', () => {
  it('renders desciption correctly', () => {
    const { getByText } = render(
      <Item
        title="Item 1"
        description="This is item 1"
        image="https://picsum.photos/200"
        price={10}
      />,
    );
    const description = getByText('This is item 1');
    expect(description.textContent).toMatch('This is item 1');
  });
  it('renders the title correctly', () => {
    const { getByText } = render(
      <Item
        title="Item 1"
        description="This is item 1"
        image="https://picsum.photos/200"
        price={10}
      />,
    );
    const title = getByText('Item 1');
    expect(title.textContent).toMatch('Item 1');
  });
  it('renders the price correctly', () => {
    const { getByText } = render(
      <Item
        title="Item 1"
        description="This is item 1"
        image="https://picsum.photos/200"
        price={10}
      />,
    );
    const price = getByText('$10');
    expect(price.textContent).toMatch('$10');
  });
});

describe('Item', () => {
  it('plus button renders correctly after click', async () => {
    render(<Item />);
    const button = screen.getByRole('button', { name: '+' });
    await userEvent.click(button);
    const count = screen.getByRole('spinbutton');
    expect(count.value).toMatch('2');
  });
  it('minus button renders correctly after click', async () => {
    render(<Item />);
    const button = screen.getByRole('button', { name: '-' });
    await userEvent.click(button);
    const count = screen.getByRole('spinbutton');
    expect(count.value).toMatch('0');
  });
});
