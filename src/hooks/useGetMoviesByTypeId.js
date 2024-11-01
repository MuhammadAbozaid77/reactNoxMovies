import { useQuery } from "react-query";
import { getMoviesByIdType } from "../services/moviesAPI";

export default function useGetMoviesByTypeId(id) {
  const {
    isLoading,
    error,
    data: movies,
  } = useQuery({
    queryFn: getMoviesByIdType(id),
    queryKey: ["moviesDataByType"],
  });
  return { movies, isLoading, error };
}
