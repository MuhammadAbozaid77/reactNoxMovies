import { Link } from "react-router-dom";
import { CiSquareMore } from "react-icons/ci";

export default function SectionTitle({ title, path, icon }) {
  return (
    <>
      <div className="mb-[20px] flex justify-between items-center">
        <h1 className="text-[25px] text-gray-300 flex justify-start items-center">
          <span className="flex justify-center items-center mx-2">{icon}</span>
          <span className=""> {title} </span>
        </h1>
        <Link
          to={`/${path}`}
          className="flex justify-center items-center cursor-pointer hover:underline"
        >
          <span className="mx-1 text-gray-400 font-semibold"> More </span>
          <span>
            <CiSquareMore size={25} className="text-yellow-500" />
          </span>
        </Link>
      </div>
    </>
  );
}
