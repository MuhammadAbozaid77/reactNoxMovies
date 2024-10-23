import { Link, useParams } from "react-router-dom";

export default function TVSeasons({ seasons }) {
  const params = useParams();
  // const seasonId = params?.seasonId;
  console.log(params);

  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {seasons?.map((el) => (
          <Link
            to={`/seasonDetails/${params?.tvId}/${el?.season_number}`}
            className="flex  flex-col w-[180px] cursor-pointer"
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${el?.poster_path}`}
                alt=""
                className="w-[100%] rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-center text-wrap"> {el?.name} </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
