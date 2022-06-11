import React from 'react';

import CartItem from './CartItem';

import * as S from './Cart.css';

const CartList = props => {
  return (
    <ul className={S.list}>
      {props.cart.map((item, index) => {
        return <CartItem item={item} key={item.name} index={index} />;
      })}
    </ul>
  );
};

export default CartList;
