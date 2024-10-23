import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
import { links } from "../../services/links";
import logo from "../../assets/logo.png";

export default function HeaderBigScreen() {
  return (
    <div className="md:flex hidden justify-between items-center w-full gap-8 h-full">
      <div className="w-1/2 flex justify-start gap-8 items-center">
        <img src={logo} alt="logo" className="w-[150px]" />
        <ul className="flex items-center gap-3 navLinksActive">
          {links.map((el) => (
            <li className="text-white" key={el.name}>
              <NavLink to={el.url} className={"capitalize text-lg font-light"}>
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 flex justify-between items-center  gap-4">
        <SearchBar />
        <NavbarIcons />
      </div>
    </div>
  );
}
