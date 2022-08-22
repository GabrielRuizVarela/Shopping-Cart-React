import React, { useReducer, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import '../styles/Item.scss';

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

interface ItemState {
  quantity: number;
  isAddedtoCart: boolean;
}

const initialState: ItemState = {
  quantity: 1,
  isAddedtoCart: false,
};

type ItemAction = {
  type:
    | 'ADD_TO_CART'
    | 'REMOVE_FROM_CART'
    | 'INCREMENT'
    | 'DECREMENT'
    | 'ONCHANGE';
  payload?: number;
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

function Item({ name: title, description, colors, price, id }: ItemProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [color, setColor] = useState(colors[0]);

  return (
    <div className="item" id={String(id)}>
      <img src={color.image} alt={title} />
      <div className="item-info">
        <h3>
          <Link to={`/shop/${id}`}>{title}</Link>
        </h3>
        <div className="colors">
          {colors.map((buttonColor) => (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              type="button"
              key={nanoid()}
              className={`${buttonColor.color} ${
                color.color === buttonColor.color ? 'active' : ''
              }`}
              onClick={() => setColor(buttonColor)}
            />
          ))}
        </div>
        <p>
          {
            description.find((element) => element.color === color.color)
              ?.description
          }
        </p>
        <p>{`$${price}`}</p>
      </div>
      <div className="item-addToCart">
        <button
          type="button"
          id="minusButton"
          onClick={() => {
            if (state.quantity > 0) {
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
          onChange={(e) =>
            dispatch({
              type: 'ONCHANGE',
              payload: parseInt(e.target.value, 10) || 0,
            })
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
        <button
          type="button"
          id="plusButton"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Item;
