import React from 'react';
import {BrowserRouter} from 'react-router-dom';

 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';
import GlobalStyle from './styles';

const App = () => (
  <BrowserRouter> 
    <>
      <Navbar/>
      <Routes/>
      <Footer/>
      <GlobalStyle/>
    </>
  </BrowserRouter>
);

export default App;
