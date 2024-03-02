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
      <div className="flex items-center">
        <a href="#" className="">
          <img src={logo} alt="Urubyte" className="w-auto h-8 md:h-10" />
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
          <ul className="flex flex-col gap-8 items-center mt-4 md:flex-row md:mt-0">
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

      <a
        href="#login"
        className={`self-center ${
          mobileMenu ? "block" : "hidden"
        } md:block btn:hover  activeNav === "#login" ? "active" : ""`}
      >
        <button
          onClick={() => setMobileMenu(false)}
          type="button"
          className={`border-2 mt-4 md:mt-0 rounded px-4 py-1 w-32 hover:text-skyColor`}
        >
          Get Started
        </button>
      </a>
    </nav>
  );
};

export default Nav;
