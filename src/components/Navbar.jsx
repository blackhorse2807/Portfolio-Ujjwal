import { styles } from "../style";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { logo1, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo1} alt="Logo" className="w- h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ujjwal&nbsp;
            <span className="sm:block hidden">Kumar Singh</span>
          </p>
        </Link>
        {scrolled === true && (
          <button
            className={`text-white bg-gradient-to-r from-indigo-600 to-purple-600 py-2 px-4 sm:py-3 sm:px-6 rounded-xl font-semibold cursor-pointer shadow-md shadow-primary 
          w-auto mx-auto fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out
          hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50
          active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-400 hover:shadow-inner hover:text-indigo-300`}
          >
            <a href="https://drive.google.com/drive/folders/1lGfpIG4O0ML6gIyN_NVUCk2mjcpjRHmd?usp=drive_link">
              Wanna Hire Me?
            </a>
          </button>
        )}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
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
