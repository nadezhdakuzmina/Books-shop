import React from 'react';

import Layout from './Layout';
import Header from '../../components/Header';
import ShopList from '../../components/ShopList';
import Loader from '../../components/Loader';
import Filters from '../../components/Filters';

import { Context } from './context';

const App = () => {
  return (
    <Layout>
      <Context.Consumer>
        {({ isLoaded }) => (isLoaded ? <Header /> : <Loader />)}
      </Context.Consumer>
      <Filters />
      <ShopList />
    </Layout>
  );
};

export default App;
