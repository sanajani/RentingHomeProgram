// router link
import { Link } from "react-router-dom";

// imported icons
import * as ai from "react-icons/ai";

// state
import { useState } from "react";

// navbar components
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import ReactIcon from "./ReactIcon";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex justify-between h-12 bg-blue-600 items-center px-4">
      <h1 className="text-2xl font-bold">Logo</h1>

      {/* desktop navbar  */}
      <DesktopNav />

      {/* hamburger button */}
      <ReactIcon 
      style={"cursor-pointer font-bold md:hidden"}
      onIconClick={() => setNavOpen(true)}
      Icon={ai.AiOutlineAlignLeft}
      size={24}
      />

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

            <ReactIcon 
            style={"text-2xl cursor-pointer font-bold"}
            onIconClick={() => setNavOpen(false)}
            Icon={ai.AiOutlineClose}
            size={24}
            />

          </div>
          <MobileNav onLinkClick={() => setNavOpen(false)} />
        </div>
      </div>
      {/* Mobile navbar */}
    </div>
  );
};

export default Navbar;
