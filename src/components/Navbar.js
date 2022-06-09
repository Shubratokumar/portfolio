import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const ResumeLink = (
        <a className="btn btn-outline btn-primary" href="https://drive.google.com/file/d/1LZ3YgIRgbtN1B118aa8lFxMe42EOixhT/view" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      );
  const navMenu = (
    <>
      <li>
        <Link  to="/about">ABOUT</Link>
      </li>
      <li>
        <Link  to="/portfolio">PORTFOLIO</Link>
      </li>
      <li>
        <Link  to="/contact">CONTACT</Link>
      </li>
      <li>
          {ResumeLink}
      </li>
    </>
  );
  
  return (
    <div className="navbar bg-base-100 z-20 sticky top-0 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-x-2"
          >
            {navMenu}
          </ul>
        </div>
        <p className="font-semibold text-3xl text-primary">
            <Link to="/">SK</Link>            
        </p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-x-2">{navMenu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
