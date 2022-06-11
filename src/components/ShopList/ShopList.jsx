import React, { useContext } from 'react';

import List from './List';

import { Context } from '../../containers/App';
import * as CommonS from '../../assets/styles/index.css';

const ShopList = () => {
  const { books } = useContext(Context);

  return (
    <div className="root">
      {books?.length ? (
        <List items={books} />
      ) : (
        <div className={CommonS.box}>Нет книг </div>
      )}
    </div>
  );
};

export default ShopList;
