import { Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/moviesAPI";
import { useQuery, useQueryClient } from "react-query";
import Wrapper from "../../components/ui/Wrapper";
import SpinnerLoading from "../../components/ui/SpinnerLoading";

// getMovieDetails
export default function MovieDetailsLayout() {
  const params = useParams();
  const movieId = params?.movieId;

  // ------------- Fetching Data --------------------
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: movieDetails,
  } = useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: () => getMovieDetails(movieId),
    enabled: !!movieId,
    onSuccess: (data) => {
      // Manually set the data in the cache for sharing
      queryClient.setQueryData(["movieDetails", movieId], data);
    },
  });

  const imagePath = `https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`;

  if (isLoading) return <SpinnerLoading />;

  return (
    <div
      className="relative py-[10px] min-h-[calc(100vh-80px)]"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content above the overlay */}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
}
