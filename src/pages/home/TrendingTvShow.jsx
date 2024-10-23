import { useQuery } from "react-query";
import { getTrendingTvShow } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import GridContainer from "../../components/ui/GridContainer";
import { BiTv } from "react-icons/bi";
import TvCards from "../../components/cards/TvCards";
import { CiSquareMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/cards/SectionTitle";

export default function TrendingTvShow() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingTvShowList"],
    queryFn: getTrendingTvShow,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="my-[100px]">
      <SectionTitle
        title={"Trending TV"}
        path={"tvShow"}
        icon={<BiTv className=" text-yellow-500" size={30} />}
      />

      <GridContainer>
        {data?.slice(0, 6).map((el, index) => (
          <TvCards key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
