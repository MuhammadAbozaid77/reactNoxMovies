import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { links } from "../../services/links";

export default function HeaderSmallScreen() {
  const [isOpened, setisOpened] = useState(false);
  const handelToggle = () => {
    setisOpened((prev) => !prev);
  };
  return (
    <div className="fixed inset-0 md:hidden px-5">
      <div className="flex justify-between items-center h-20">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[150px]" />
        </Link>
        <IoMenu size={30} onClick={handelToggle} className="text-white" />
      </div>
      {isOpened && (
        <div className="h-full bg-gray-800 p-5">
          <ul className="flex items-center gap-3 flex-col justify-center">
            {links.map((el) => (
              <li
                className="text-gray-300 border-b border-gray-600 w-full"
                key={el.name}
              >
                <NavLink
                  to={el.url}
                  className={"capitalize text-lg font-light"}
                >
                  {el.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
