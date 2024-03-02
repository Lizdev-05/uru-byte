import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import logo from "../../assets/uru-logo.png";
import "./Nav.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeNav, setActivenav] = useState("#");

  const setNav = (activeNavBar) => {
    setMobileMenu(false);
    setActivenav(activeNavBar);
  };

  return (
    <nav
      className={`flex flex-col z-10 bg px-8 py-7 ${
        mobileMenu ? "h-screen " : "h-fit"
      } fixed top-0 w-full shadow-xl md:flex-row md:justify-between md:px-20 md:h-fit`}
    >
      <div className="mr-4 logo">
        <a href="#" className="text-xl">
          <img src={logo} alt="Urubyte" className="w-full h-full" />
        </a>
      </div>
      <nav>
        <div className="md:hidden mobile-btns">
          <button
            type="button"
            className={classNames(!mobileMenu ? "block" : "hidden")}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-8 mr-2" />
          </button>
          <button
            type="button"
            className={classNames(mobileMenu ? "block" : "hidden")}
            onClick={() => setMobileMenu(false)}
          >
            <XIcon className="h-8 mr-2" />
          </button>
        </div>
        <div
          className={classNames(mobileMenu ? "block" : "hidden", "md:block")}
        >
          <ul className="flex flex-col gap-8 items-center mt-24 md:flex-row md:mt-1">
            <li>
              <a
                href="#"
                onClick={() => setNav("#")}
                className={activeNav === "#" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setNav("#skills")}
                className={activeNav === "#skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => setNav("#project")}
                className={activeNav === "#project" ? "active" : ""}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Nav;
