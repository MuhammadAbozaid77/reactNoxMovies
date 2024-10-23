import { useParams } from "react-router-dom";
import { getTvDetails } from "../../services/tvShowAPI";
import { useQuery } from "react-query";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import TvDetailsCenter from "./components/TvDetailsCenter";
import TvDetailsLeft from "./components/TvDetailsLeft";

// gettvShowDetails
export default function TvDetails() {
  const params = useParams();
  const tvId = params?.tvId;

  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: tvShowDetails,
  } = useQuery({
    queryKey: ["tvShowDetails", tvId],
    queryFn: () => getTvDetails(tvId),
    enabled: !!tvId,
  });

  console.log("tvShowDetails", tvShowDetails);

  const imagePath = `https://image.tmdb.org/t/p/original${tvShowDetails?.poster_path}`;
  const centerDetails = {
    title: tvShowDetails?.original_name,
    overview: tvShowDetails?.overview,
    genres: tvShowDetails?.genres,
    companies: tvShowDetails?.production_companies,
    tagline: tvShowDetails?.tagline,
  };
  const iconsData = {
    language: tvShowDetails?.spoken_languages,
    rating: tvShowDetails?.vote_average,
    vote: tvShowDetails?.vote_count,
    status: tvShowDetails?.status,
    release: tvShowDetails?.release_date,
    time: tvShowDetails?.runtime,
    link: tvShowDetails?.homepage,
  };
  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="relative text-white gap-8 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-4">
      <TvDetailsLeft pic={imagePath} />
      <TvDetailsCenter
        centerDetails={centerDetails}
        iconsData={iconsData}
        tvId={tvShowDetails?.id}
        seasons={tvShowDetails?.seasons}
      />
    </div>
  );
}
