import React, { useContext } from 'react';

import Counter from '../Counter';

import { Context } from '../../containers/App';
import { CATEGORY_COLORS } from '../../utils/constants';
import * as S from './ShopList.css';

const ShopItem = ({ item }) => {
  const { addToCart, cart } = useContext(Context);

  const { name, price, coverUrl } = item;

  const cartItem = cart.find(cartItem => cartItem.name === name);

  console.log(cartItem?.counter);

  const onAdd = () => {
    addToCart(item);
  };

  const color = CATEGORY_COLORS[item.categoryId];

  return (
    <li className={S.listItem}>
      <div className={S.item}>
        <img
          style={{ borderLeft: `3px solid ${color}` }}
          className={S.image}
          src={coverUrl}
        />
        <div className={S.info}>
          <span className={S.title}>{name}</span>
          <div className={S.bottom}>
            <div>
              <span className={S.price}>{price}</span>
              <span>руб.</span>
            </div>
            {cartItem?.counter >= 1 ? (
              <Counter item={cartItem} />
            ) : (
              <button onClick={onAdd} className={S.button}>
                В корзину
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopItem;
