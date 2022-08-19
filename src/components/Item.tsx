import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

interface ItemProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

interface ItemState {
  quantity: number;
  isAddedtoCart: boolean;
}

const initialState: ItemState = {
  quantity: 1,
  isAddedtoCart: false,
};

type ItemAction = {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'INCREMENT' | 'DECREMENT' | 'ONCHANGE',
  payload?: number
};

function reducer(state: ItemState, action: ItemAction): ItemState {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        isAddedtoCart: true,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        isAddedtoCart: false,
      };
    case 'INCREMENT':
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case 'ONCHANGE':
      return {
        ...state,
        quantity: action.payload!,
      };
    default:
      return state;
  }
}

function Item({
  title, description, image, price,
}: ItemProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="item-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          $
          {price}
        </p>
      </div>
      <div className="item-addToCart">
        <button
          type="button"
          id="minusButton"
          onClick={() => {
            if (state.quantity > 1) {
              dispatch({ type: 'DECREMENT' });
            }
          }}
        >
          -
        </button>
        <input
          type="number"
          id="quantity"
          value={state.quantity}
          onChange={
          (e) => dispatch({ type: 'ONCHANGE', payload: (parseInt(e.target.value, 10) || 0) })
         }
        />
        <button
          type="button"
          id="addToCardButton"
          onClick={() => {
            if (state.isAddedtoCart) {
              dispatch({ type: 'REMOVE_FROM_CART' });
              return;
            }
            dispatch({ type: 'ADD_TO_CART' });
          }}
        >
          Add to Cart
          <Icon icon="prime:shopping-cart" />
        </button>
        <button type="button" id="plusButton" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
    </div>
  );
}

export default Item;
