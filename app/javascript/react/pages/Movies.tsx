import { Movie } from "../models";
import { useMovies } from "../queries/movie";

export default function MoviesPage() {
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      {error ? <div style={{ color: "red" }}>{error.message}</div> : null}

      {movies && movies.length ? (
        <ul>
          {movies.map((movie: Movie) => (
            <li key={movie.id}>
              {movie.titulo} {movie.semana ? `(${movie.semana})` : null}
            </li>
          ))}
        </ul>
      ) : (
        <div>Nenhum filme encontrado</div>
      )}
    </div>
  );
}
