import { Link } from "react-router-dom";
import img from "../../../assets/hotel.png";
import MenuDropdown from "./Dopdownmenu";
const Navbar = () => {
  const Navlinks = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>
      <li>
        <Link to="">Task</Link>
      </li>
      <li></li>
      <li></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          <a className=" text-sm">
            <img className="w-12" src={img} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
        </div>
        {/* ------------------drop down--------------------------- */}
        <div className="navbar-end">
          <MenuDropdown></MenuDropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
