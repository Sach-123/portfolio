import { useState } from "react";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar fixed top-0 z-10 flex  w-full items-center justify-between border-b-[1px] border-primary py-3 text-white backdrop-blur-xl backdrop-brightness-75 backdrop-saturate-200">
      <a href="#" className="ml-[5%] cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="logo h-[50px] w-[150px] rounded transition duration-500 hover:shadow-[0px_2px_15px_10px_rgba(0,0,0,0.3)] hover:shadow-[#C778DD]"
        />
      </a>

      <div className="navlink mr-[5%] hidden list-none  justify-between sm:flex">
        <ul className="sm:text-md flex justify-between md:text-xl">
          <li className="ml-[50px] mr-[50px] hover:scale-110 hover:text-primary sm:ml-[30px] sm:mr-[30px]">
            <a href="#home">
              <span className="text-primary">#</span>Home
            </a>
          </li>
          <li className="ml-[50px] mr-[50px] hover:scale-110 hover:text-primary sm:ml-[30px] sm:mr-[30px]">
            <a href="#projects">
              <span className="text-primary hover:text-white">#</span>Projects
            </a>
          </li>
          <li className="ml-[50px] mr-[50px] hover:scale-110 hover:text-primary sm:ml-[30px] sm:mr-[30px]">
            <a href="#skills">
              <span className="text-primary">#</span>Skills
            </a>
          </li>
          <li className="ml-[50px] hover:scale-110  hover:text-primary sm:ml-[30px]">
            <a href="#about">
              <span className="text-primary">#</span>About-me
            </a>
          </li>
        </ul>
      </div>

      <div className="mr-[5%] flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[30px] w-[30px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } sidebar absolute right-0 top-20 mx-2 my-2 min-w-[140px] rounded-xl bg-[#1c1f24]/90`}
      >
        <ul className=" flex flex-1 flex-col items-start justify-end sm:hidden">
          <li className="mb-4 ml-[50px] mr-[50px] hover:scale-110 hover:text-primary sm:ml-[30px] sm:mr-[30px] ">
            <a href="#home">
              <span className="text-primary">#</span>Home
            </a>
          </li>
          <li className="mb-4 ml-[50px] mr-[50px] hover:scale-110 hover:text-primary sm:ml-[30px] sm:mr-[30px]">
            <a href="#projects">
              <span className="text-primary">#</span>Projects
            </a>
          </li>
          <li className="mb-4 ml-[50px] mr-[50px] hover:scale-110 hover:text-primary sm:ml-[30px] sm:mr-[30px]">
            <a href="#skills">
              <span className="text-primary">#</span>Skills
            </a>
          </li>
          <li className="ml-[50px] hover:scale-110  hover:text-primary sm:ml-[30px]">
            <a href="#about">
              <span className="text-primary">#</span>About-me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
