import { useState } from "react";
import { links } from "./links";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function NewNavBar() {
  const [showList, setShowList] = useState(null);
  console.log(showList);

  return (
    <>
      <nav className="bg-gray-500 p-2 relative h-[100px]">
        <ul className="flex justify-center items-center gap-5">
          {links?.map((el, index) => {
            return (
              <>
                {el?.list ? (
                  <li
                    className="p-2 text-gray-200 font-semibold capitalize flex justify-center gap-1 items-center"
                    key={index}
                  >
                    <span> {el?.name}</span>
                    {showList ? (
                      <IoChevronUpOutline
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setShowList(null)}
                      />
                    ) : (
                      <IoChevronDownOutline
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setShowList(el?.id)}
                      />
                    )}
                  </li>
                ) : (
                  <li
                    className="p-2 text-gray-200 font-semibold capitalize cursor-pointer"
                    key={index}
                  >
                    {el?.name}
                  </li>
                )}
              </>
            );
          })}
        </ul>
        <div className="absolute top-[100px] left-0 right-0 z-[3000]">
          {showList && (
            <>
              <div className="bg-gray-300 h-[200px] text-[50px] w-[100%]">
                {showList}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
