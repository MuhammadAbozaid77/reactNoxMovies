import { useParams } from "react-router-dom";
import MoviesList from "./MoviesList";
import useGetMoviesGeneresType from "../../hooks/useGetMoviesGeneresType";

export default function Movies() {
  const params = useParams();
  // const fff = useGetMoviesByTypeId(params?.moviesTypeId);

  const { moviesGenersData, isLoading, error } = useGetMoviesGeneresType();

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <MoviesList />
    </div>
  );
}
