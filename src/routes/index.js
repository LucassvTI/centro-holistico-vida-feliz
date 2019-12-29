import React from 'react';
import {Switch ,Route} from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Profissional from '../pages/Profissional'
import Tecnicas from '../pages/Tecnicas'
import NotFound from '../pages/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/atividades" component={Sobre}/>
    <Route path="/profissional" component={Profissional}/>
    <Route path="/tecnicas" component={Tecnicas}/>
    <Route path="*" component={NotFound}/>
  </Switch>
);

export default Routes;
