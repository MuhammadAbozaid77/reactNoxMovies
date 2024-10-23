import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({ data, isLoading }) {
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
  // if (isLoading) return <SpinnerLoading />;
  return (
    <>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        {data?.length > 0 &&
          data?.map((el) => (
            <div className="rounded-[15px] m-1 overflow-hidden " key={el?.id}>
              <div className="relative flex justify-center items-center hover:scale-105 duration-150 transition-all">
                <img
                  className="object-cover "
                  src={`https://image.tmdb.org/t/p/original${el?.poster_path}`}
                  alt=""
                />
                <div
                  className={`-rotate-90 absolute top-[10px] left-[5px] rounded py-2 text-gray-200 w-[100px] text-center font-semibold px-3 capitalize ${el?.media_type === "tv" ? "bg-yellow-600" : "bg-red-600"}`}
                >
                  {el?.media_type}
                </div>
              </div>
              <div></div>
            </div>
          ))}
      </Carousel>
    </>
  );
}
