import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 px-2 py-1 rounded-full"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <MdHomeWork />
        <div>صفحه اصلی</div>
      </NavLink>
      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 px-2 py-1 rounded-full"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <RiCheckboxMultipleBlankFill />

        <div> لیست</div>
      </NavLink>
      <NavLink
        to={"mailto:inquiries.codearusman@gmail.com"}
        className={"flexCenter gap-x-1 rounded-full px-2 py-1"}
      >
        <MdPermContactCalendar />
        <div>تماس با ما</div>
      </NavLink>
      <NavLink
        to={"/addproperty"}
        className={"flexCenter gap-x-1 rounded-full px-2 py-1"}
      >
        <MdAddHome />
        <div>افزودن دارایی</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
