import { useQuery } from "react-query";
import { getTrendingMovies } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import GridContainer from "../../components/ui/GridContainer";
import { CiSquareMore } from "react-icons/ci";
import { RiMovie2Line } from "react-icons/ri";
import MovieCards from "../../components/cards/MovieCards";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/cards/SectionTitle";

export default function TrendingMovies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingMoviesList"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="my-[100px]">
      <SectionTitle
        title={"Trending Movies"}
        path={"movies"}
        icon={<RiMovie2Line className=" text-yellow-500" size={30} />}
      />

      <GridContainer>
        {data?.slice(0, 6).map((el, index) => (
          <MovieCards key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
