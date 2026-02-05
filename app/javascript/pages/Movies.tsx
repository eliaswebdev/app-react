import { useMovies } from "../queries/movieQueries";

export default function MoviesPage() {
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      {error ? <div style={{ color: "red" }}>{error.message}</div> : null}

      {movies && movies.length ? (
        <ul>
          {movies.map((movie: any) => (
            <li key={movie.id ?? movie.codigo ?? movie.slug}>
              {movie.titulo || movie.title || movie.name}{" "}
              {movie.semana ? `(${movie.semana})` : null}
            </li>
          ))}
        </ul>
      ) : (
        <div>Nenhum filme encontrado</div>
      )}
    </div>
  );
}
