import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen text-textBlack">
      <Navbar />
      <main className="flex-grow py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

