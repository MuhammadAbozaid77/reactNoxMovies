import { FaLanguage } from "react-icons/fa6";
import { FaGrinStars, FaStar } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

export default function MovieDetailsRight({ iconsData }) {
  const { language, rating, vote, status, release, time } = iconsData;
  // console.log("iconsData", iconsData);

  const hours = Math.floor(time / 60); // Get the whole hours
  const remainingtime = time % 60;

  const iconsRight = [
    {
      icon: <FaLanguage />,
      name: "language",
      data: language?.map((el) => (
        <span className="border border-gray-600 rounded-md p-1">
          {el?.english_name}
        </span>
      )),
    },
    {
      icon: <BsFillCalendarDateFill />,
      name: "release date",
      data: release,
    },
    {
      icon: <BiSolidTimeFive />,
      name: "time",
      data: `${hours} hours  and ${remainingtime} minutes`,
    },
    {
      icon: <FaStar />,
      name: "rating",
      data: rating,
    },
    {
      icon: <IoIosPeople />,
      name: "vote",
      data: vote,
    },
    {
      icon: <FaGrinStars />,
      name: "status",
      data: status,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 rounded-xl gap-1 border px-2 py-5 border-gray-700">
        {iconsRight?.map((el, index) => (
          <div className="flex justify-start items-center" key={index}>
            <span className="px-1 text-[18px] cursor-pointer text-yellow-600 font-semibold  capitalize">
              {el?.icon}
            </span>
            <span className="px-1 text-[12px]  cursor-pointer text-gray-300  font-semibold  capitalize">
              {el?.name} :
            </span>
            <span className="px-1 text-[12px]  cursor-pointer text-gray-500  font-semibold  capitalize flex gap-1">
              {el?.data}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
