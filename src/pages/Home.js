import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Desenvolvimento Pessoal</h1>
      <nav>
        <ul>
          <li><Link to="/formulario">Formulário</Link></li>
          <li><Link to="/dados-fetch">Dados Fetch</Link></li>
          <li><Link to="/dados-axios">Dados Axios</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
