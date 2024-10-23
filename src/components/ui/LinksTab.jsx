import { Link, NavLink } from "react-router-dom";

export default function LinksTab({ tabLinks }) {
  return (
    <>
      <div className="my-4 border-b border-gray-800 pb-1 flex justify-start items-center gap-4 tabsLinksActive">
        {tabLinks?.map((item) => (
          <NavLink
            key={item.name}
            to={item.url}
            className="text-gray-300  min-w-[80px]   p-1  text-center font-semibold"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}
