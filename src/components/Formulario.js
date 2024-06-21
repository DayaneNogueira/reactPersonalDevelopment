import React, { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tema, setTema] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${nome}\nEmail: ${email}\nTema: ${tema}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Tema:</label>
        <input type="text" value={tema} onChange={(e) => setTema(e.target.value)} required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
