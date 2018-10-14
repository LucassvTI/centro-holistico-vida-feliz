import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './components/pages/home'
import Sobre from './components/pages/sobre'
import Profissional from './components/pages/profissional'
import Tecnicas from './components/pages/tecnicas'
import Contato from './components/pages/contato'

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div >
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre}/>
          <Route path="/profissional" component={Profissional}/>
          <Route path="/tecnicas" component={Tecnicas}/>
          <Route path="/contato" component={Contato}/>
          <Footer />
        </div>
      </BrowserRouter>
     
    )
  }
}

export default App;
