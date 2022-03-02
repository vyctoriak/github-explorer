import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'Unform22',
  description: 'Example of a repository description',
  link: 'https://www.github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        <RepositoryItem 
          repository={repository}
        />
      </ul>
    </section>
  );
}
