import { NavLink, Link } from "react-router-dom";

const MobileNav = ({ onLinkClick }) => {
  
  let navigationItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/properties", label: "Properties" },
    { to: "/info", label: "Info" },
  ];

  const getNavLinkClass = (({isActive}) => `
  rounded-lg w-full py-3 px-4 transition-colors duration-200
  ${
    isActive ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white"
  }
  `)


  return (
    <div className="flex flex-col justify-center items-center gap-10 md:hidden min-h-screen">
      <nav className="flex flex-col gap-5 w-4/5 text-center text-xl">
        {navigationItems.map((link) => {
          return (
            <NavLink
              key={link.to}
              onClick={onLinkClick}
              to={link.to}
              className={getNavLinkClass}>
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
