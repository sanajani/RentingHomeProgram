import { Link } from 'react-router-dom'
import ReactIcon from './ReactIcon'
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from './MobileNav';

const MobileNavWrapper = ({navOpen, setNavOpen}) => {
  return (
          <div
        className={`fixed top-0 right-0 min-h-screen w-full 
          md:hidden bg-gray-900 transition-all duration-500 
          ease-in-out ${navOpen ? "translate-x-0" : "translate-x-full"} z-50`}
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
            Icon={AiOutlineClose}
            size={24}
            />

          </div>
          <MobileNav onLinkClick={() => setNavOpen(false)} />
        </div>
      </div>
  )
}

export default MobileNavWrapper
