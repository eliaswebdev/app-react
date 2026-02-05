import { Movie } from "../models";
import BaseService from "./BaseService";

export class MovieService extends BaseService {
  constructor() {
    super("/api");
  }

  list(params?: any) {
    return this.fetchData<Movie[]>(this.get("/movies", params));
  }

  getById(id: number | string) {
    return this.fetchData<Movie>(this.get(`/movies/${id}`));
  }

  create(payload: Partial<Movie>) {
    return this.fetchData<Movie>(this.post("/movies", payload));
  }

  update(id: number | string, payload: Partial<Movie>) {
    return this.fetchData<Movie>(this.put(`/movies/${id}`, payload));
  }

  remove(id: number | string) {
    return this.fetchData<void>(this.delete(`/movies/${id}`));
  }
}

const movieService = new MovieService();
export default movieService;
