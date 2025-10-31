import { Outlet } from "react-router-dom"
const MainLayout = () => {
  return (
    <div>
      <div>
      Main layout
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout