import { useParams } from "react-router-dom";
import { getTvSeasonDetails } from "../../services/tvShowAPI";
import { useQuery } from "react-query";

export default function SeasonDetails() {
  const params = useParams();
  const seasonNumber = params?.seasonNumber;
  const tvId = params?.tvId;

  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: tvSeasonDetails,
  } = useQuery({
    queryKey: ["tvSeasonDetails", seasonNumber , tvId],
    queryFn: () => getTvSeasonDetails(seasonNumber , tvId),
    enabled: !!seasonNumber,
  });

  console.log("tvSeasonDetails", tvSeasonDetails);

  return <></>;
}
