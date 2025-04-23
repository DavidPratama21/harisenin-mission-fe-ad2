import { Outlet } from "react-router-dom"
import HeaderMain from "../components/HeaderMain"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <>
      <HeaderMain />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout