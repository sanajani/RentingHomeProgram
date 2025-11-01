
// imported icons
import {AiOutlineAlignLeft, AiOutlineSearch } from "react-icons/ai";

// state
import { useState } from "react";

// navbar components
import DesktopNav from "./DesktopNav";
import ReactIcon from "./ReactIcon";
import MobileNavWrapper from "./MobileNavWrapper";

// Search component
import Search from "../searchbox/Search";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex justify-between h-12 bg-blue-600 items-center px-4 relative">
      <h1 className="text-2xl font-bold">Logo</h1>

      {/* desktop navbar  */}
      <div className="flex gap-5">
        <ReactIcon 
          Icon={AiOutlineSearch}
          size={24}
      />
        <DesktopNav />

        {/* hamburger button */}
          <ReactIcon 
            onIconClick={() => setNavOpen(true)}
            Icon={AiOutlineAlignLeft}
            size={24}
            style="md:hidden"
          />
      </div>

      {/* Mobile navbar */}
      <MobileNavWrapper navOpen={navOpen} setNavOpen={setNavOpen}/>
      {/* Mobile navbar */}

      {/* <div className=""> */}
        <Search />
      {/* </div> */}
    </div>
  );
};

export default Navbar;
