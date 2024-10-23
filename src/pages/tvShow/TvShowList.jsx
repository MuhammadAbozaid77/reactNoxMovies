import { useQuery } from "react-query";
import GridContainer from "../../components/ui/GridContainer";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Pagination from "../../components/ui/Pagination";
import { useState } from "react";
import Wrapper from "../../components/ui/Wrapper";
import TvCards from "../../components/cards/TvCards";
import { getPopularTvShow } from "../../services/tvShowAPI";

export default function TvShowList() {
  const [currentPage, setCurrentPage] = useState(1);
  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: tvShowList,
  } = useQuery({
    queryKey: ["tvShowList", currentPage],
    queryFn: () => getPopularTvShow(currentPage),
    enabled: !!currentPage,
  });
  console.log(tvShowList);

  // ------------- Return --------------------
  if (isLoading) return <SpinnerLoading />;
  return (
    <Wrapper classesName={"py-16"}>
      <GridContainer>
        {tvShowList?.length > 0 &&
          tvShowList?.map((el) => <TvCards item={el} key={el?.id} />)}
      </GridContainer>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Wrapper>
  );
}
