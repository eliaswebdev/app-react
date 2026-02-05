import Badge from "react-bootstrap/esm/Badge";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";
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
            <div key={movie.id} className="col-6 col-lg-3">
              <div className="card shadow-sm h-100 border">
                <div
                  className="d-flex overflow-auto"
                  style={{ maxHeight: "400px" }}
                >
                  <Image
                    src={movie.cartaz}
                    className="card-img-top object-fit-cover"
                    alt={movie.titulo}
                    fluid
                  />
                </div>
                <div className="card-header">
                  <h5 className="card-title mb-0 text-center">
                    {movie.titulo}
                  </h5>
                </div>

                <Badge
                  bg="success"
                  className="rounded-0 text-wrap text-center py-2 shadow-sm"
                >
                  {movie.semana ? `(${movie.semana})` : null}
                </Badge>

                <div className="card-body text-lg-center bg-light">
                  <div className="d-grid gap-2">
                    <Button
                      type="button"
                      variant="light"
                      className="border shadow-sm"
                      size="sm"
                    >
                      <i className="bi bi-film me-2"></i>
                      Sessões
                    </Button>
                    <Button
                      type="button"
                      variant="light"
                      className="border shadow-sm"
                      size="sm"
                    >
                      <i className="bi bi-play-circle me-2"></i>
                      Trailer{" "}
                    </Button>
                    <Button
                      type="button"
                      variant="info"
                      className="border shadow-sm"
                      size="sm"
                    >
                      <i className="bi bi-file-text me-2"></i>
                      Sinopse
                    </Button>
                    <Button
                      type="button"
                      variant="success"
                      className="border shadow-sm"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://www.veloxtickets.com/portal/Local/Cinema/Teresina/Cinemas-Teresina/TRS",
                          "_blank",
                        )
                      }
                    >
                      <i className="bi bi-tags me-2"></i>
                      Comprar
                    </Button>
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
