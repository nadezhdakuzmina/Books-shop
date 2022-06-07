import React, { useState, useEffect } from 'react';

import { Context } from './context';
import { getCategoryList } from './api-requests/getCategoryList';
import { getBooksList } from './api-requests/getBooksList';

import { DEFAULT_BALANCE } from '../../utils/constants';
import { getCost } from '../../utils/getCost';

const Layout = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [search, setSearch] = useState('');
  const [sortPrice, setSortPrice] = useState('DESC');
  const [categoryId, setCategoryId] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [books, setBooks] = useState(null);
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!window.localStorage.balance) {
      window.localStorage.setItem('balance', DEFAULT_BALANCE);
    }

    setBalance(window.localStorage.balance);

    if (window.localStorage.cart) {
      try {
        setCart(JSON.parse(window.localStorage.cart));
      } catch (e) {
        setCart([]);
      }
    }

    getCategoryList()
      .then(list => setCategoryList(list))
      .catch(() => setHasError(true));
  }, []);

  useEffect(() => {
    getBooksList(search, sortPrice, categoryId)
      .then(books => setBooks(books))
      .catch(() => setHasError(false));
  }, [search, sortPrice, categoryId]);

  const addToCart = newItem => {
    const newCart = [...cart];
    const item = newCart.find(item => item.name === newItem.name);

    if (item) {
      item.counter += 1;
    } else {
      newCart.push({
        ...newItem,
        counter: 1,
      });
    }

    setCart(newCart);
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const onIncrement = item => {
    item.counter += 1;
    setCart([...cart]);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };
  const onDecrement = item => {
    item.counter -= 1;
    const newCart = [...cart];

    if (!item.counter) {
      const index = newCart.findIndex(curItem => curItem.name === item.name);
      if (index >= 0) {
        newCart.splice(index, 1);
      }
    }

    setCart(newCart);
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const buy = () => {
    const cost = getCost(cart);
    if (cost > balance) {
      return false;
    }

    const newBalance = balance - cost;
    setBalance(newBalance);
    window.localStorage.setItem('balance', newBalance);
    setCart([]);

    return true;
  };

  const removeFromCart = item => {
    const newCart = [...cart];
    const index = newCart.findIndex(delItem => delItem.name === item.name);
    if (index >= 0) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <Context.Provider
      value={{
        // Данные
        isLoaded: categoryList && books,
        balance,
        books,
        cart,
        isOpenedCart,
        categoryList,
        sortPrice,
        hasError,
        // Методы
        setIsOpenedCart,
        setSearch,
        setSortPrice,
        setCategoryId,
        addToCart,
        onIncrement,
        onDecrement,
        buy,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Layout;
