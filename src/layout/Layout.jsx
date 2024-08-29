import { Outlet } from "react-router-dom"
// import { Footer } from "../components/Home/Footer"
import Header from "../components/Home/Header"
import Footer from "../components/Home/Footer"

const Layout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer/>
    </>
  )
}

export default Layout