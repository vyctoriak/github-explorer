const repositoryName = 'Unform'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Repository description</p>

          <a href="#">
            Access Repository
          </a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Repository description</p>

          <a href="#">
            Access Repository
          </a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Repository description</p>

          <a href="#">
            Access Repository
          </a>
        </li>
      </ul>
    </section>
  );
}