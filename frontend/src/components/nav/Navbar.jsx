
// imported icons
import {AiOutlineAlignLeft, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

// state
import { useState } from "react";

// navbar components
import DesktopNav from "./DesktopNav";
import ReactIcon from "./ReactIcon";
import MobileNavWrapper from "./MobileNavWrapper";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex justify-between h-12 bg-blue-600 items-center px-4">
      <h1 className="text-2xl font-bold">Logo</h1>

      {/* desktop navbar  */}
      <DesktopNav />

      {/* hamburger button and search button */}
      <div className="flex gap-4">
        {/* search */}
        <ReactIcon 
          Icon={AiOutlineSearch}
          size={24}
      />
      {/* hamburger */}
        <ReactIcon 
          onIconClick={() => setNavOpen(true)}
          Icon={AiOutlineAlignLeft}
          size={24}
        />
      </div>

      {/* Mobile navbar */}
      <MobileNavWrapper navOpen={navOpen} setNavOpen={setNavOpen}/>
      {/* Mobile navbar */}

    </div>
  );
};

export default Navbar;
