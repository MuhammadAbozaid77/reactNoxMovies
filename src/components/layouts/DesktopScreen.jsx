import { links } from "./links";
import NavbarLink from "./NavbarLink";
import { motion } from "framer-motion";

export default function DesktopScreen() {
  return (
    <>
      <ul className="flex justify-center items-center gap-5">
        {links?.map((el, index) => (
          <motion.li key={index} className="">
            <NavbarLink item={el} />
          </motion.li>
        ))}
      </ul>
    </>
  );
}
