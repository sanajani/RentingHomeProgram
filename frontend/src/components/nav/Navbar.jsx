import { Link, NavLink } from "react-router-dom";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="flex justify-between h-12 bg-blue-600 items-center px-4">
      <h1 className="text-2xl font-bold">Logo</h1>

      {/* desktop navbar  */}
      <DesktopNav />

      {/* hamburger button */}
      <button
        className="cursor-pointer font-bold md:hidden"
        aria-label="open menu"
        onClick={() => setNavOpen(true)}
      >
        <AiOutlineAlignLeft size={24} />
      </button>

      {/* Mobile navbar */}
      <div
        className={`fixed top-0 min-h-screen w-full md:hidden bg-gray-900 transition-all duration-300 ease-in-out ${
          navOpen ? "right-0" : "-right-full"
        } z-50`}
      >
        <div>
          {/* mobile nav menu header */}
          <div className="flex md:hidden justify-between px-3 border-b-2 items-center py-4">
            <Link
              to="/"
              className="cursor-pointer font-bold"
              onClick={() => setNavOpen(false)}
            >
              Menu
            </Link>

            <button
              className="text-2xl cursor-pointer font-bold"
              onClick={() => setNavOpen(false)}
            >
              <AiOutlineClose size={22} />
            </button>

          </div>
          <MobileNav onLinkClick={() => setNavOpen(false)} />
        </div>
      </div>
      {/* Mobile navbar */}
    </div>
  );
};

export default Navbar;
