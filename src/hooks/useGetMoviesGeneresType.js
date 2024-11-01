import { useQuery } from "react-query";
import { getMoviesGenres } from "../services/genreAPI";

export default function useGetMoviesGeneresType() {
  const {
    isLoading,
    error,
    data: moviesGenersData,
  } = useQuery({
    queryFn: getMoviesGenres,
    queryKey: ["moviesGeners"],
  });
  return { moviesGenersData, isLoading, error };
}
