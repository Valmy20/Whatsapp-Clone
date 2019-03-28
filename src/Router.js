import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const Rotas = () => (
  <Router>
    <Scene key='root'>
      <Scene key='formlogin' component={FormLogin} initial title='Login' />
      <Scene key='formcadastro' component={FormCadastro} title='Cadastro' />
    </Scene>
  </Router>
);

export default Rotas;
