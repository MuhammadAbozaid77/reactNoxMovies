import { useQuery } from "react-query";
import { getTrendingPeople } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import GridContainer from "../../components/ui/GridContainer";
import StarCard from "../../components/cards/StarCard";
import { CiSquareMore } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../components/cards/SectionTitle";

export default function TrendingPeople() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingPeopleList"],
    queryFn: getTrendingPeople,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="my-[100px]">
      <SectionTitle
        title={"Trending Stars"}
        path={"stars"}
        icon={<FaUsers className=" text-yellow-500" size={30} />}
      />

      <GridContainer>
        {data?.slice(0, 6).map((el, index) => (
          <StarCard key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
