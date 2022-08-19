/** @jest-environment jsdom */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Item from '../Item';

describe('Item', () => {
  const { getByText } = render(
    <Item
      title="Item 1"
      description="This is item 1"
      image="https://picsum.photos/200"
      price={10}
    />,
  );
  it('renders correctly', () => {
    const description = getByText('This is item 1');
    expect(description.textContent).toMatch('This is item 1');
    const title = getByText('Item 1');
    expect(title.textContent).toMatch('Item 1');
    const price = getByText('$10');
    expect(price.textContent).toMatch('$10');
  });
});
