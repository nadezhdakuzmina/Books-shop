import React, { useContext } from 'react';
import classnames from 'classnames';

import SortIcon from '../../assets/static/images/sort.svg';
import SearchIcon from '../../assets/static/images/search.svg';
import DropdownSelect from '../DropdownSelect';

import { Context } from '../../containers/App/context';
import * as S from './Filters.css';
import * as CommonS from '../../assets/styles/index.css';

const Filters = () => {
  const {
    setSearch,
    setSortPrice,
    sortPrice,
    setCategoryId,
    categoryList,
  } = useContext(Context);

  const onChange = event => {
    setSearch(event.target.value);
  };

  const sort = () => {
    if (sortPrice === 'ASC') {
      setSortPrice('DESC');
    } else {
      setSortPrice('ASC');
    }
  };

  return (
    <>
      <div className={S.filters}>
        <span onClick={sort} className={classnames(S.sort, CommonS.text)}>
          Сортировать по цене
          <SortIcon
            className={classnames(S.icon, {
              [S.iconActive]: sortPrice === 'ASC',
            })}
          />
        </span>
        <DropdownSelect onSelect={setCategoryId} items={categoryList} />
      </div>
      <div className={S.search}>
        <SearchIcon className={S.searchIcon} />
        <input onChange={onChange} placeholder="Введите название книги" />
      </div>
    </>
  );
};

export default Filters;
