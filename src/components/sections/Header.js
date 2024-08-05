import Lock from "../icons/Lock";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Header() {
  const countries = ["India", "USA", "Canada", "UK", "Australia"];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container flex flex-col">
      <div className="self-end relative">
        <select className="font-medium appearance-none bg-white pl-2 pr-7 leading-tight focus:outline-none focus:shadow-outline" defaultValue="India">
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
      </div>
      <div className="flex justify-between container items-center relative">
        <img src="#" alt="logo" />
        <ul
          className={`nav-comp lg:flex flex-col items-stretch w-full absolute top-full lg:w-fit lg:gap-5 lg:flex-row lg:static bg-white ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="border-t-2">
            <a href="">Accounts & Deposits</a>
          </li>
          <li>
            <a href="">Cards</a>
          </li>
          <li>
            <a href="">Loan</a>
          </li>
          <li>
            <a href="">Invest</a>
          </li>
          <li>
            <a href="">Insure</a>
          </li>
          <li>
            <a href="">Services & Payments</a>
          </li>
        </ul>
        <div className="flex gap-2 items-center relative">
          <div className="group flex gap-2 min-w-28 items-center relative">
            <button className="w-full h-8 uppercase bg-[#008738] text-xs text-white cursor-pointer flex items-center justify-center ">
              <Lock />
              LOGIN
            </button>
            <div className="login-drop absolute w-40 border-t-2 top-full right-0 h-auto group-hover:visible invisible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <ul className="list-none">
                <li>
                  <a href="/UserLogin">User Login</a>
                </li>
                <li>
                  <a href="/EmployeeLogin">Employee Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              className={`${menuOpen ? "block" : "hidden"}`}
              onClick={toggleMenu}
            >
              <Close />
            </button>
            <button
              className={`${menuOpen ? "hidden" : "block"}`}
              onClick={toggleMenu}
            >
              <Hamburger />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
