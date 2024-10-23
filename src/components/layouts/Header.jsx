import Wrapper from "../ui/Wrapper";
import HeaderBigScreen from "./HeaderBigScreen";
import HeaderSmallScreen from "./HeaderSmallScreen";

export default function Header() {
  return (
    <Wrapper classesName="h-20 border-b  border-gray-700 bg-[#0a0a0a]">
      {/* Start In Screen Mode */}
      <HeaderBigScreen />
      {/* End In Responsive Mode */}

      {/* Start In Responsive Mode */}
      <HeaderSmallScreen />
      {/* End In Responsive Mode */}
    </Wrapper>
  );
}
