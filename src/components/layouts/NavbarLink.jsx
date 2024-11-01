import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NavbarLink({ item }) {
  const { t } = useTranslation();
  const checkDropdown = item?.dropdown;
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };
  //   const handleMouseEnter = () => setIsHover(true);
  //   const handleMouseLeave = () => setIsHover(false);

  // ------------------Animate------------------
  const submenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "flex",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="flex justify-center gap-1 items-center p-1 text-[16px]  capitalize font-semibold">
        {item?.path ? (
          <Link to={item?.path}> {t(item?.name)} </Link>
        ) : (
          <span>{t(item?.name)}</span>
        )}

        {checkDropdown && (
          <span className="cursor-pointer group/link">
            <IoChevronDown
              size={22}
              className="group-hover/link:rotate-180 duration-200"
            />
          </span>
        )}
      </div>

      {checkDropdown && isHover && (
        <motion.div
          initial={"exit"}
          animate={isHover ? "enter" : "exit"}
          variants={submenuAnimate}
          className="absolute rounded-md p-3 flex flex-col gap-1 bg-blue-300/[20%]  min-w-[180px] backdrop-blur "
        >
          {item?.dropdown?.map((el, index) => (
            <Link
              key={index}
              to=""
              className="p-2 text-[16px] capitalize bg-black/[70%]  rounded-md"
            >
              {t(el?.name)}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
