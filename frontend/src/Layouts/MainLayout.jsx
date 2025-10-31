import { Outlet } from "react-router-dom"

// navbar imported
import Navbar from '../components/nav/Navbar'

const MainLayout = () => {
  return (
    <div className="bg-red-500 text-white">
      <Navbar />
      <main className="">
      <Outlet />
      </main>
    </div>
  )
}

export default MainLayout