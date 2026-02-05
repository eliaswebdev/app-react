import { Movie } from "../models";
import { useMovies } from "../queries/movie";

export default function MoviesPage() {
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      {error ? <div style={{ color: "red" }}>{error.message}</div> : null}

      {movies && movies.length ? (
        <div className="row g-3">
          {movies.map((movie: Movie) => (
            <div key={movie.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <img
                  src={movie.cartaz}
                  className="card-img-top"
                  alt={movie.titulo}
                ></img>
                <div className="card-header">
                  <h5 className="card-title mb-0">{movie.titulo}</h5>
                </div>
                <div className="card-body">
                  {movie.semana ? `(${movie.semana})` : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Nenhum filme encontrado</div>
      )}
    </div>
  );
}
