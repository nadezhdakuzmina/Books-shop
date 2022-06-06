import React, { useContext } from 'react';
import { Context } from '../../containers/App';
import List from './List';

const ShopList = () => {
  const { books } = useContext(Context);

  return (
    <div className="root">
      {books?.length ? <List items={books} /> : <>Нет книг</>}
    </div>
  );
};

export default ShopList;
