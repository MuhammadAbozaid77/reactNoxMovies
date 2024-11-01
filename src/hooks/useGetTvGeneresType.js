import { useQuery } from "react-query";
import { getTVGenres } from "../services/genreAPI";

export default function useGetTvGeneresType() {
  const {
    isLoading,
    error,
    data: tvGenersData,
  } = useQuery({
    queryFn: getTVGenres,
    queryKey: ["tvGeners"],
  });
  return { tvGenersData, isLoading, error };
}
