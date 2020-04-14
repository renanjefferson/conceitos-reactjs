import React, { useState, useEffect } from "react";
import Header from './components/Header';
import api from 'services/api';

import "./styles.css";

function App() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: "Desafio ReactJS",
      url: "https://github.com/renanjefferson/conceitos-reactjs",
      techs: ["React", "React DOM", "AXIOS", "React Icons"]
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  function handleRemoveRepository(id) {
    api.delete(`repositories/${id}`);

    setRepositories([...repositories.filter(r => r.id !== id)]);
  }

  return (
    <div id="app">
      <Header />
      <div className="container">
        <aside>
          <button onClick={handleAddRepository}>Adicionar</button>
        </aside>
        <main>
          <ul data-testid="repository-list">
            { repositories.map(repository => (
              <li key={repository.id}>
                <strong>{repository.title}</strong>
                <button onClick={() => handleRemoveRepository(repository.id)}>
                  Remover
                </button>
              </li>
            )) }
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
