import { NavLink } from "react-router-dom"

const DesktopNav = () => {
    let navInfo = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/properties", label: "Properties" },
    { to: "/info", label: "Info" },
    { to: "/signup", label: "signup" },
    { to: "/login", label: "login" },

  ];
  return (
    <div className="hidden md:block">
        <nav className="flex gap-4">
          {
            navInfo.map((link) => {
             return <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            })
          }
        </nav>
    </div>
  )
}

export default DesktopNav