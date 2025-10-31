import { Outlet } from "react-router-dom"

// navbar imported
import Navbar from '../components/nav/Navbar'

const MainLayout = () => {
  return (
    <div className="bg-red-500 text-white">
      <div className="">
      <div>
        <Navbar />
      </div>
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout