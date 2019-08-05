import React from 'react';
import {Switch ,Route} from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Profissional from '../pages/Profissional'
import Tecnicas from '../pages/Tecnicas'
import Contato from '../pages/Contato'
import NotFound from '../pages/NotFound'

// import { Container } from './styles';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sobre" component={Sobre}/>
    <Route path="/profissional" component={Profissional}/>
    <Route path="/tecnicas" component={Tecnicas}/>
    <Route path="/contato" component={Contato}/>
    <Route path="*" component={NotFound}/>
  </Switch>
);

export default Routes;
