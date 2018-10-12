import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Pricing from './components/pricing'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Route path='/' exact component={About} />
            <Route path='/services' component={Services} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/contact' component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
