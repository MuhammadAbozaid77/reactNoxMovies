import { useState } from "react";
//
export default function Pagination({ currentPage, setCurrentPage }) {
  // ------------------ Url Search Params ------------------

  const pageCount = 20;
  const nextPage = () => {
    setCurrentPage(currentPage === pageCount ? currentPage : currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
  };

  const handelClick = (n) => {
    setCurrentPage(n);
  };

  // ------------------------ Return -------------------------
  //   if (count <= 1) return null;
  return (
    <div className="flex justify-center items-center w-full mt-8">
      <ul className=" flex justify-center items-center">
        <button
          className="border bg-gray-800 text-gray-300 font-semibold  w-[100px]  p-2 rounded-s"
          onClick={previousPage}
        >
          Previous
        </button>
        <div
          onClick={() => handelClick(currentPage)}
          className="p-2  cursor-pointer border bg-gray-100 w-[40px] text-center"
        >
          {currentPage}
        </div>
        <div
          onClick={() => handelClick(currentPage + 1)}
          className="p-2  cursor-pointer border bg-gray-100 w-[40px] text-center"
        >
          {currentPage + 1}
        </div>
        <div
          onClick={() => handelClick(currentPage + 2)}
          className="p-2  cursor-pointer border bg-gray-100 w-[40px] text-center"
        >
          {currentPage + 2}
        </div>
        <button
          className="border bg-gray-800 text-gray-300 font-semibold  w-[100px] p-2 rounded-e"
          onClick={nextPage}
        >
          Next
        </button>
      </ul>
    </div>
  );
}
