import React, { useContext } from 'react';

import End from '../../assets/static/images/Union.svg';
import Counter from '../Counter';

import { Context } from '../../containers/App';
import * as S from './Cart.css';

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
