import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggled, setToggled] = useState(false);

  return (
    <nav
      className={`${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Full name and title */}
        <Link
          to="/"
          className=""
          onClick={() => {
            setActive();
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain mr-2" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Naran JARGAL &nbsp;
            <span className="sm:block hidden">| Full stack develoepr</span>
          </p>
        </Link>

        {/* Nav links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                link.title === active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Menu/Close button */}
        <div className="flex flex-1 justify-end items-center">
          <img
            src={toggled ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggled(!toggled)}
          />

          <div
            className={`${
              toggled ? "flex" : "hidden"
            } p-6 black-gradient absolute top-40 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    link.title === active ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggled(!toggled);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
