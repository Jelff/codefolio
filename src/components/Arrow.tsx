export function Arrow({ large = false }: { large?: boolean }) {
  return (
    <span aria-hidden="true" className={large ? "arrow arrow-large" : "arrow"}>
      ↗
    </span>
  );
}
