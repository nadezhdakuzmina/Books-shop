import React from 'react';
import ShopItem from './ShopItem';

import * as S from './ShopList.css';

const List = props => {
  return (
    <ul className={S.list}>
      {props.items.map(item => {
        return (
          <ShopItem item={item} key={item.name} onChange={props.onToggle} />
        );
      })}
    </ul>
  );
};

export default List;
