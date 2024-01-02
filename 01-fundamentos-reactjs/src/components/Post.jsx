export function Post(props) {
  return (
    <article>
      <strong>{props.author}</strong>
      <span>{props.content}</span>
    </article>
  );
}
