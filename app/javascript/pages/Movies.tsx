import { useEffect, useState } from "react";

type Movie = { id: number; title: string; year?: number };

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/movies")
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setMovies(data);
      })
      .catch(() => {
        if (mounted) setMovies([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      {movies && movies.length ? (
        <ul>
          {movies.map((m) => (
            <li key={m.id}>
              {m.title} {m.year ? `(${m.year})` : null}
            </li>
          ))}
        </ul>
      ) : (
        <div>Nenhum filme encontrado</div>
      )}
    </div>
  );
}
