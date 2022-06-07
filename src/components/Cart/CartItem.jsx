import React, { useContext } from 'react';
import classnames from 'classnames';
import { Context } from '../../containers/App';
import End from '../../assets/static/images/Union.svg';

import * as S from './Cart.css';
import * as CommonS from '../../assets/styles/index.css';

export const Counter = ({ item }) => {
  const { onIncrement, onDecrement } = useContext(Context);
  return (
    <div className={S.counter}>
      <button
        onClick={() => onDecrement(item)}
        className={classnames(CommonS.button)}
      >
        -
      </button>
      <span className={S.textCounter}>{item.counter} шт.</span>
      <button
        onClick={() => onIncrement(item)}
        className={classnames(CommonS.button)}
      >
        +
      </button>
    </div>
  );
};

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);

  return (
    <li key={item.name}>
      <div className={S.cartItem}>
        <div className={S.cartItemInfo}>
          <span>{item.name}</span>
          <Counter item={item} />
          <span>{item.price} руб.</span>
        </div>
        <End onClick={() => removeFromCart(item)} className={S.removeSmall} />
      </div>
    </li>
  );
};

export default CartItem;
