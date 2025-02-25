import { useState } from "react";

import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import menuCloseIcon from "../assets/images/icon-menu-close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowNavBar() {
    setIsOpen((show) => !show);
  }

  return (
    <header className="relative flex w-full justify-between md:mt-[89px]">
      <img
        src={logo}
        alt="Web3 logo"
        className="mt-7 ml-4 h-7 md:mt-0 md:ml-5 xl:ml-0"
      />

      <button
        aria-label="Toggle menu"
        onClick={handleShowNavBar}
        className="cursor-pointer md:hidden"
      >
        {!isOpen && (
          <img src={menuIcon} alt="Menu icon" className="mt-7 mr-4" />
        )}
      </button>

      <nav className="hidden md:mr-5 md:block xl:mr-0">
        <ul className="text-Gunmetal *:hover:text-LightVermillion text-[.94rem] leading-[26px] font-normal *:cursor-pointer md:flex md:gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="absolute right-0 h-screen w-[68.3%] bg-green-500 md:hidden">
          <button
            className="mt-7 mr-5 ml-auto"
            aria-label="Toggle menu"
            onClick={handleShowNavBar}
          >
            <img src={menuCloseIcon} alt="Close Menu Icon " />
          </button>

          <nav className="mt-[86.3px] ml-6">
            <ul className="text-DarkSpaceBlue space-y-6 text-lg leading-6 font-normal">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
