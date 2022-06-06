import React, { useContext } from 'react';
import classnames from 'classnames';

import CartList from './CartList';
import CartIcon from '../../assets/static/images/cart.svg';
import End from '../../assets/static/images/Union.svg';

import { getCost } from '../../utils/getCost';
import { Context } from '../../containers/App';
import * as S from './Cart.css';
import * as CommonS from '../../assets/styles/index.css';

const Cart = () => {
  const { buy, cart, isOpenedCart, setIsOpenedCart, balance } = useContext(
    Context
  );

  const cost = getCost(cart);

  const onClick = () => {
    setIsOpenedCart(!isOpenedCart);
  };

  return (
    <div className={S.root}>
      <div className={S.cartBox}>
        <End onClick={onClick} className={S.remove} />
        <div className={S.scrol}>
          <span className={classnames(CommonS.title, CommonS.box, S.title)}>
            {' '}
            Корзина <CartIcon className={S.icon} />{' '}
          </span>
          <span className={classnames(CommonS.box, S.balance)}>
            Баланс: {balance} руб.
          </span>
          <CartList cart={cart} />
        </div>
        <div className={S.box}>
          <div className={classnames(CommonS.box, S.cost)}>
            <span className={CommonS.title}>{cost}</span>
            <span> руб.</span>
          </div>
          <div className={CommonS.box}>
            <button
              disabled={cost > balance}
              onClick={buy}
              className={S.button}
            >
              КУПИТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
