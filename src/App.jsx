import React from 'react';
import App from 'react-router-dom';
import Home from './components/Home';
import Formulario from './components/Formulario';
import DadosFetch from './components/DadosFetch';
import DadosAxios from './components/DadosAxios';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/dados-fetch" element={<DadosFetch />} />
        <Route path="/dados-axios" element={<DadosAxios />} />
      </Routes>
    </div>
  );
}

export default App;
