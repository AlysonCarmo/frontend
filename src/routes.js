import React from 'react';
// importando responsaveis pelas rodas da aplicação
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//importanto componentes para usar nas rotas

import Main from './pages/Main';
import Box from './pages/Box';


//criando rotas de um componente par ao outro
const Routes = () =>(
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/box/:id" component={Box} />
      </Switch>
    </BrowserRouter>
);

export default Routes;