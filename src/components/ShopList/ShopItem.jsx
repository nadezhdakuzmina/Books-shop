import React, { useContext } from 'react';

import { Context } from '../../containers/App';
import { CATEGORY_COLORS } from '../../utils/constants';

import * as S from './ShopList.css';

const ShopItem = ({ item }) => {
  const { addToCart } = useContext(Context);

  const { name, price, coverUrl } = item;

  const onAdd = () => {
    addToCart(item);
  };

  const color = CATEGORY_COLORS[item.categoryId];
  console.log(color);

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
            <button onClick={onAdd} className={S.button}>
              В корзину
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopItem;
