import { Link } from "react-router-dom";
import pic from "./../../assets/user.jpg";
export default function StarCard({ item }) {

  return (
    <>
      <Link to={`/movies/movieDetails/${item?.id}`} className="cursor-pointer ">
        <div className="col-span-1 text-white rounded-lg overflow-hidden  relative ">
          <img
            className="hover:scale-110 duration-300 transition-all"
            src={
              item?.profile_path
                ? `https://image.tmdb.org/t/p/original${item?.profile_path}`
                : pic
            }
            alt=""
          />
          {/* <div className="hover:bg-black/40 absolute inset-0"></div> */}
        </div>
        <h1 className="text-gray-200 mt-1 ">{item?.name}</h1>
      </Link>
    </>
  );
}
