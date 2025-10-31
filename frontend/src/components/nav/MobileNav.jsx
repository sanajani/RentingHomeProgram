import { NavLink, Link } from "react-router-dom";

const MobileNav = ({ onLinkClick }) => {
  let navInfo = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/properties", label: "Properties" },
    { to: "/info", label: "Info" },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:hidden min-h-screen">
      <nav className="flex flex-col gap-5 w-4/5 text-center text-xl">
        {navInfo.map((link) => {
          return (
            <NavLink
              key={link.to}
              onClick={onLinkClick}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg w-full py-3 px-4 transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/logout" className="bg-red-700 px-7 rounded-lg text-xl py-2">
        Logout
      </Link>
    </div>
  );
};

export default MobileNav;

// <NavLink onClick={() => setNavOpen(false)} to='/test2' className="rounded-lg bg-gray-700 w-full py-1 px-4">
//   Info
// </NavLink>
