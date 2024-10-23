import defaultPic from "./../../../assets/compantLogo2.jpg";
import { TbPlayerPlayFilled } from "react-icons/tb";
import MovieDetailsRight from "./MovieDetailsRight";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

export default function MovieDetailsCenter({
  centerDetails,
  iconsData,
  movieId,
}) {
  const { title, overview, genres, companies, tagline  } = centerDetails;

  return (
    <>
      <div className="flex flex-col gap-2 px-5 lg:w-2/3 w-3/3">
        <div className=" rounded-b-[10px]">
          <h2 className="text-[35px] text-white font-semibold">{title}</h2>
          <div className="flex justify-start gap-2 items-center">
            <p className="text-gray-500 font-semibold text-[16px] leading-6  rounded-md">
              {tagline}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 text-[16px] font-semibold">
              Overview
            </span>
          </div>
          <p className="text-gray-400 text-[12px] leading-4 bg-gray-800/70 rounded-md p-3">
            {overview}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 font-semibold text-[16px] me-2">
              Genres
            </span>
            <div className="flex justify-start items-center flex-wrap gap-2">
              {genres?.map((el) => (
                <span
                  key={el?.id}
                  className="p-1 bg-gray-800/70  text-gray-400 font-semibold min-w-[80px] rounded-md text-center text-[12px]"
                >
                  {el?.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 font-semibold text-[16px] me-2">
              Production companies
            </span>
          </div>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {companies?.map((el) => (
              <div
                className="w-[100px] h-[100px] bg-white relative overflow-hidden p-2 rounded flex-wrap"
                key={el?.id}
              >
                <img
                  src={
                    el?.logo_path
                      ? `https://image.tmdb.org/t/p/original${el?.logo_path}`
                      : defaultPic
                  }
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2 ">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 font-semibold text-[16px] me-2">
              Details
            </span>
          </div>

          <MovieDetailsRight iconsData={iconsData} />
        </div>

        <Link to={`/movieVideos/${movieId}`} className="mt-4">
          <button className="border  px-8 rounded-full h-[60px] flex justify-center items-center gap-2 bg-gray-200">
            <span>
              <TbPlayerPlayFilled size={30} className="text-gray-600" />
            </span>
            <span className="text-[20px] text-gray-600 font-semibold">
              Watch Now
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}
