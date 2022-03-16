import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // first param, function: wich function I want to execute; 
  // second param, dependencies: is to inform when I want to execute, 
  // like when a variable change.
  useEffect(() => {
    fetch('https://api.github.com/users/vyctoriak/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [repositories])

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}
