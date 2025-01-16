import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import userIcon from "../assets/user.svg";

const Header = () => {
  const [active, setActive] = useState(true);
  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu = () => setmenuOpened(!menuOpened);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (menuOpened) {
          setmenuOpened(false);
        }
      }
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]);
  return (
    <header className="max-padd-container fixed top-1 w-full right-0 left-0 z-50">
      <div
        className={`${
          active ? "py-0" : "py-1"
        } max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5 `}
      >
        <div className="flexBetween py-3">
          <Link to={"/"}>
            <span className="font-[900] text-[24px]">
              {" "}
              دفتر <span className="font-[600] medium-20">مرکزی</span>
            </span>
          </Link>
          <div className="flexCenter gap-x-4">
            {/* Desktop */}
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-10 capitalize medium-15 ring-1 ring-slate-900/10 rounded-full p-2 bg-primary"
              }
            />

            {/* mobile */}
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "xl:hidden flex items-start flex-col gap-y-8 capitalize fixed top-20 left-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -left-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 "
              }`}
            />
          </div>
          {/* buttons */}
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {menuOpened ? (
              <MdClose
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            ) : (
              <MdMenu
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            )}
            <button className="btn-secondary rounded-full flexCenter gap-x-2 medium-16">
              <img src={userIcon} height={22} width={22} alt="" />
              <span>ورود</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
