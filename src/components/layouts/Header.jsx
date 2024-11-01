import Wrapper from "../ui/Wrapper";
import DesktopScreen from "./DesktopScreen";
import Logo from "./Logo";
import MobileScreen from "./MobileScreen";

export default function Header() {
  return (
    <Wrapper classesName="border-b  border-gray-700 bg-[#0a0a0a] h-[100px]">
      <div className="text-white flex justify-between items-center h-[100%]">
        <Logo />
        <DesktopScreen />
        <div className="flex justify-center items-center gap-x-5">
          <button> SignIn </button>
          <div className="lg:hidden block">
            <MobileScreen />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
// links
