import { NavLink, Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:hidden min-h-screen">
      <nav className="flex flex-col gap-5 w-4/5 text-center text-xl">
        <NavLink to='/' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          Home
        </NavLink>
        <NavLink to='/about' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          About
        </NavLink>
        <NavLink to='/contact' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          Contact
        </NavLink>
        <NavLink to='/properties' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          Properties
        </NavLink>
        <NavLink to='/info' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          Info
        </NavLink>
        <NavLink to='/test' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          Info
        </NavLink>
        <NavLink to='/test2' className="rounded-lg bg-gray-700 w-full py-1 px-4">
          Info
        </NavLink>
      </nav>
      <Link to='/logout' className="bg-red-700 px-7 rounded-lg text-xl py-2">Logout</Link>
    </div>
  );
};

export default MobileNav;
