import { useQuery } from "@tanstack/react-query";
import { Movie } from "../models";
import movieService from "../services/MovieService";

export function useMovies(params?: any) {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", params],
    queryFn: async () => {
      return movieService.list(params);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useMovie(id: number | string) {
  return useQuery<Movie, Error>({
    queryKey: ["movie", id],
    queryFn: async () => {
      return movieService.getById(id);
    },
    enabled: !!id,
  });
}
