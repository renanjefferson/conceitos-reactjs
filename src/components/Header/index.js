import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import './styles.css';

export default function Header() {
  return (
    <header>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
    </header>
  );
}
