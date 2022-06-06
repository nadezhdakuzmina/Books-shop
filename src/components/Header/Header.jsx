import React, { useContext } from 'react';
import classnames from 'classnames';

import BookIcon from '../../assets/static/images/book.svg';
import CartIcon from '../../assets/static/images/cart.svg';
import Cart from '../Cart';

import { Context } from '../../containers/App';
import * as S from './Header.css';
import * as CommonS from '../../assets/styles/index.css';

const Header = () => {
  const { balance, setIsOpenedCart, isOpenedCart } = useContext(Context);

  const onClick = () => {
    setIsOpenedCart(!isOpenedCart);
  };
  console.log(isOpenedCart);

  return (
    <>
      <div className={S.root}>
        <div className={classnames(S.header, CommonS.box)}>
          <BookIcon className={S.iconBook} />
          <span className={classnames(CommonS.title, CommonS.box)}>
            Магазин книг
          </span>
        </div>
        <div className={classnames(S.header, CommonS.box)}>
          <span className={classnames(S.balance, CommonS.text, CommonS.box)}>
            Баланс: {balance} руб.
          </span>
          <div className={CommonS.box} onClick={onClick}>
            <CartIcon className={S.iconCart} />
          </div>
        </div>
      </div>
      {isOpenedCart && <Cart />}
    </>
  );
};

export default Header;
