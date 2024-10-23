import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCards from "../cards/MovieCards";
import SpinnerLoading from "../ui/SpinnerLoading";

export default function MoviesSlider({ data, isLoading }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    xlmobile: {
      breakpoint: { max: 769, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // media_type
  if (isLoading) return <SpinnerLoading />;
  return (
    <>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        {data?.length > 0 &&
          data?.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="mx-1">
              <MovieCards item={el} />
            </div>
          ))}
      </Carousel>
    </>
  );
}
