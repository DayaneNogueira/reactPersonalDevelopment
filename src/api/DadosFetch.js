export async function fetchData() {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    return data.entries;
  }  
  import React, { useEffect, useState } from 'react';

const DadosFetch = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => setDados(data.entries));
  }, []);

  return (
    <div>
      <h2>Dados obtidos com Fetch</h2>
      <ul>
        {dados.map((item, index) => (
          <li key={index}>{item.API}: {item.Description}</li>
        ))}
      </ul>
    </div>
  );
}

export default DadosFetch;
