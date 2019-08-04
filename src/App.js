import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layout from './components/Layout';
import GlobalStyle from './styles';

const App = () => (
  <BrowserRouter> 
    <>
      <Layout />
      <GlobalStyle/>
    </>
  </BrowserRouter>
);

export default App;
