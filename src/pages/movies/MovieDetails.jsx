import MovieDetailsLeft from "./components/MovieDetailsLeft";
import MovieDetailsCenter from "./components/MovieDetailsCenter";
import { useParams } from "react-router-dom";
import SimillarMovies from "./components/SimillarMovies";
import { useQueryClient } from "react-query";

// getMovieDetails
export default function MovieDetails() {
  const params = useParams();
  const movieId = params?.movieId;
  const queryClient = useQueryClient();
  const movieDetails = queryClient.getQueryData(["movieDetails", movieId]);

  // console.log("movieDetails", movieDetails);

  const centerDetails = {
    title: movieDetails?.original_title,
    overview: movieDetails?.overview,
    genres: movieDetails?.genres,
    companies: movieDetails?.production_companies,
    tagline: movieDetails?.tagline,
  };

  const iconsData = {
    language: movieDetails?.spoken_languages,
    rating: movieDetails?.vote_average?.toFixed(1),
    vote: movieDetails?.vote_count,
    status: movieDetails?.status,
    release: movieDetails?.release_date,
    time: movieDetails?.runtime,
    link: movieDetails?.homepage,
  };

  console.log(movieDetails);

  return (
    <>
      <div className=" relative text-white gap-2 mt-4 flex justify-center items-start lg:flex-row flex-col">
        <MovieDetailsLeft pic={movieDetails?.poster_path} />
        <MovieDetailsCenter
          centerDetails={centerDetails}
          iconsData={iconsData}
          movieId={movieDetails?.id}
        />
      </div>
      <SimillarMovies />
    </>
  );
}
