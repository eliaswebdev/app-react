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
              <div className="card shadow-sm h-100">
                <img
                  src={movie.cartaz}
                  className="card-img-top"
                  alt={movie.titulo}
                />
                <div className="card-header">
                  <h5 className="card-title mb-0">{movie.titulo}</h5>
                </div>
                <div className="bg-success rounded-0 text-wrap text-center">
                  <strong className="badge">
                    {movie.semana ? `(${movie.semana})` : null}
                  </strong>
                </div>
                <div className="card-body text-lg-center bg-dark pb-0">
                  <div className="d-grid gap-2">
                    <a
                      className="btn btn-light border btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target={`#movie_showtimes_${movie.id}`}
                      href="#"
                    >
                      <i className="bi bi-film me-2"></i>
                      Sessões
                    </a>{" "}
                    <a
                      className="btn btn-light border btn-sm"
                      title={movie.titulo}
                      data-fancybox="gallery"
                      data-caption={movie.titulo}
                      href={`//www.youtube.com/embed/${movie.trailer}`}
                    >
                      <i className="bi bi-play-circle me-2"></i>
                      Trailer
                    </a>{" "}
                    <a
                      className="btn btn-info text-white btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target={`#movie_synopsis_${movie.id}`}
                      href="#"
                    >
                      <i className="bi bi-file-text me-2"></i>
                      Sinopse
                    </a>{" "}
                    <a
                      className="btn btn-success text-white btn-sm"
                      target="_blank"
                      href="https://www.veloxtickets.com/portal/Local/Cinema/Teresina/Cinemas-Teresina/TRS"
                    >
                      <i className="bi bi-tags me-2"></i>
                      Comprar
                    </a>{" "}
                  </div>
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
