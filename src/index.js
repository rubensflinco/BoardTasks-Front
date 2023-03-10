import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaginaIndex from './paginas/index';
import PaginaLogin from './paginas/login';
import PaginaCadastro from './paginas/cadastro';
import PaginaTarefas from './paginas/tarefas';
import Pagina404 from './paginas/404';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={PaginaIndex} />
        <Route exact path="/login" component={PaginaLogin} />
        <Route exact path="/cadastro" component={PaginaCadastro} />
        <Route exact path="/tarefas" component={PaginaTarefas} />
        <Route exact path="/*" component={Pagina404} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
