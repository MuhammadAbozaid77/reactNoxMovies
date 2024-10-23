import Wrapper from "../ui/Wrapper";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <Wrapper
      classesName={"min-h-[150px] bg-[#0a0a0a] flex  justify-center items-center"}
    >
      <footer className="flex justify-center items-center h-[70%] flex-col w-[100%] p-5  bg-blue-900/10 rounded-md">
        <div className="flex justify-center items-center">
          <span className="text-yellow-600 font-semibold">
            Noxe App For Watching Movies and TV Shows
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-600">
            Copyright © 2024 Muhammad Abozaid
          </span>
          <span className="text-gray-600 flex gap-2">
            <FaReact size={20} className="text-blue-500" /> React Developer
          </span>
        </div>
      </footer>
    </Wrapper>
  );
}
