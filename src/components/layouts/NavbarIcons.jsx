import {
  FaInstagram,
  //   FaPlay,
  FaSpotify,
  FaTwitter,
  //   FaUser,
  FaFacebook,
} from "react-icons/fa";
export default function NavbarIcons() {
  return (
    <div className="flex justify-between items-center ">
      <FaFacebook
        size={20}
        className="me-1 cursor-pointer text-gray-400 hover:text-gray-200 duration-150"
      />
      <FaTwitter
        size={20}
        className="me-1 cursor-pointer text-gray-400 hover:text-gray-200 duration-150"
      />
      <FaSpotify
        size={20}
        className="me-1 cursor-pointer text-gray-400 hover:text-gray-200 duration-150"
      />
      <FaInstagram
        size={20}
        className="me-1 cursor-pointer text-gray-400 hover:text-gray-200 duration-150"
      />
    </div>
  );
}
