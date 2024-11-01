import { useQuery } from "react-query";
import { getMoviesGenres } from "../services/genreAPI";

export default function useGetGeners() {
  const {
    isLoading,
    error,
    data: genersData,
  } = useQuery({
    queryFn: getMoviesGenres,
    queryKey: ["Ggggggeners"],
  });

  console.log(genersData);

  return { genersData, isLoading, error };
}
