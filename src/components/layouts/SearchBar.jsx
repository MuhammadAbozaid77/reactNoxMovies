import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="flex-1">
      <form
        // onSubmit={handelSearch}
        className="flex items-center justify-between gap-4 rounded-lg px-2 py-1 border border-gray-600 flex-1 bg-[#10161D]"
      >
        <input
          type="search"
          name="name"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-gray-200"
        />
        <button className="cursor-pointer" type="submit">
          <CiSearch size={30} className="text-gray-500" />
        </button>
      </form>
    </div>
  );
}
