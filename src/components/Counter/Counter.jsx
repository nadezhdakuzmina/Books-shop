import React, { useContext } from 'react';
import classnames from 'classnames';

import { Context } from '../../containers/App';
import * as S from './Counter.css';
import * as CommonS from '../../assets/styles/index.css';

const Counter = ({ item }) => {
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

export default Counter;
