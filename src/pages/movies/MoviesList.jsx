import { useQuery } from "react-query";
import GridContainer from "../../components/ui/GridContainer";
import { getPopularMovies } from "../../services/moviesAPI";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Pagination from "../../components/ui/Pagination";
import { useState } from "react";
import Wrapper from "../../components/ui/Wrapper";
import MovieCards from "../../components/cards/MovieCards";

export default function MoviesList() {
  const [currentPage, setCurrentPage] = useState(1);
  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: popularMoviesList,
  } = useQuery({
    queryKey: ["popularMoviesList", currentPage],
    queryFn: () => getPopularMovies(currentPage),
    enabled: !!currentPage,
  });

  // ------------- Return --------------------
  if (isLoading) return <SpinnerLoading />;
  return (
    <Wrapper classesName={"py-16"}>
      <GridContainer>
        {popularMoviesList?.length > 0 &&
          popularMoviesList?.map((el) => <MovieCards item={el} key={el?.id} />)}
      </GridContainer>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Wrapper>
  );
}
