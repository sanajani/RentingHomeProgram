import { NavLink } from "react-router-dom"

import { navigationItems } from "../../utilities/navigationConfig"

const DesktopNav = () => {
  return (
    <div className="hidden md:block">
        <nav className="flex gap-4">
          {
            navigationItems.map((link) => {
             return <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            })
          }
        </nav>
    </div>
  )
}

export default DesktopNav