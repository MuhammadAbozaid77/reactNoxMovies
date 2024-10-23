import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMoviesVideos } from "../../services/moviesAPI";
import { useEffect, useState } from "react";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import { MdOutlineSlowMotionVideo, MdDownloadForOffline } from "react-icons/md";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";

export default function MovieVideos() {
  const params = useParams();
  const movieId = params?.movieId;

  const navigate = useNavigate();
  const habdelNavigateBack = () => {
    navigate(-1);
  };

  const [videoLoading, setVideoLoading] = useState(false);
  const { data: tvShowVideo, isLoading } = useQuery({
    queryKey: ["tvShowVideo", movieId],
    queryFn: () => getMoviesVideos(movieId),
    enabled: !!movieId,
  });

  const [videoShow, setVideoShow] = useState(null);
  const handelChangeVideo = (arg) => {
    setVideoLoading(true);
    setTimeout(() => {
      setVideoShow(arg);
    }, 2000);
    setVideoLoading(false);
  };

  useEffect(() => {
    setVideoShow(tvShowVideo?.[0]?.key);
  }, [tvShowVideo]);

  if (isLoading) return <SpinnerLoading />;

  if (tvShowVideo?.length === 0)
    return (
      <div className="relative flex justify-center items-center h-[400px] ">
        <div className="text-white flex flex-col justify-center items-center">
          <MdOutlineSlowMotionVideo size={200} color="white" />{" "}
          <span className="text-[30px] text-yellow-500 font-semibold">
            No Videos To Show
          </span>
        </div>
      </div>
    );

  return (
    <div className="relative py-12">
      <div className="p-3 bg-gray-800/50 mb-8 rounded-md flex justify-between items-center">
        <button
          className="text-gray-200 p-3 rounded-md bg-red-700 font-bold flex justify-between items-center gap-2"
          onClick={habdelNavigateBack}
        >
          <span>
            <FaCircleChevronLeft size={30} />
          </span>
          <span> Back To Details </span>
        </button>

        <button className="text-gray-200 p-3 rounded-md bg-green-700 font-bold flex justify-between items-center gap-2">
          <span>
            <MdDownloadForOffline size={30} />
          </span>
          <span> Download </span>
        </button>
      </div>
      <div className="grid lg:grid-cols-8  grid-cols-1 gap-4">
        <div className="lg:col-span-2 col-span-1">
          <ul className="flex flex-col justify-center items-start gap-1">
            {tvShowVideo?.length > 0 &&
              tvShowVideo?.map((el) => (
                <li
                  className={
                    " bg-gray-800/70 p-2 w-[100%] text-gray-300 border-gray-500 rounded-md flex items-center gap-2 cursor-pointer"
                  }
                  onClick={() => handelChangeVideo(el?.key)}
                  key={el?.id}
                >
                  <span>
                    <FaPlayCircle className="text-gray-200" size={30} />
                  </span>
                  <span>{el?.name}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="lg:col-span-6 col-span-1">
          {videoLoading ? (
            <SpinnerLoading />
          ) : (
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${videoShow}`}
              title={videoShow}
              className=" border-[3px] border-gray-700 mb-2 rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
