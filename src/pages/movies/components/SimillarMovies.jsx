import { useQuery } from "react-query";
import { getSimilarMovies } from "../../../services/trendingMovies";
import SpinnerLoading from "../../../components/ui/SpinnerLoading";
import { useParams } from "react-router-dom";
import MoviesSlider from "../../../components/features/MoviesSlider";

export default function SimillarMovies() {
  const params = useParams();
  const movieId = params?.movieId;

  const { isLoading, data, error } = useQuery({
    queryKey: ["simillarMoviesList", movieId],
    queryFn: () => getSimilarMovies(movieId),
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="my-[40px]">
      <MoviesSlider data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
