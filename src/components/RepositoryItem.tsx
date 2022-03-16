interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{ props.repository.name ?? 'Default' }</strong>
      <p>{props.repository.description ?? 'Nenhuma descrição foi inserida.'}</p>

      <a href={props.repository.html_url}>Access repository</a>
    </li>
  );
}
