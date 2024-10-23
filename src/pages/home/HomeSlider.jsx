import { getAllTrending } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Slider from "../../components/features/Slider";
import { useQuery } from "react-query";

export default function HomeSlider() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["allTrending"],
    queryFn: getAllTrending,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="my-[40px]">
      <Slider data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
