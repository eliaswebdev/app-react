import { useEffect, useState } from "react";
import { Movie } from "../models";
import movieService from "../services/MovieService";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await movieService.list();
        if (mounted) setMovies(data);
      } catch (err: any) {
        if (mounted) {
          setError(
            err?.data?.message || err?.statusText || "Erro ao carregar filmes",
          );
          setMovies([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}

      {movies && movies.length ? (
        <ul>
          {movies.map((movie) => (
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
