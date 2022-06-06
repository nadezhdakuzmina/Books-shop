import React, { useState } from 'react';
import classnames from 'classnames';

import CategoryIcon from '../../assets/static/images/category.svg';

import * as S from './DropdownSelect.css';
import * as CommonS from '../../assets/styles/index.css';

const DropdownSelect = ({ items, onSelect }) => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);
  };

  const selectItem = id => {
    setOpen(false);
    onSelect(id);
  };

  if (!items?.length) {
    return null;
  }

  return (
    <div className={S.root}>
      <span onClick={onClick} className={classnames(S.sort, CommonS.text)}>
        Категория
        <CategoryIcon
          className={classnames(S.icon, {
            [S.iconActive]: isOpen,
          })}
        />
      </span>
      {isOpen && (
        <div className={S.dropdown}>
          <span onClick={() => selectItem(null)} className={S.text}>
            Все категории
          </span>
          {items.map(item => (
            <span
              key={item.id}
              onClick={() => selectItem(item.id)}
              className={S.text}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
