import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
        <ScrollRestoration
          getKey={(location, matches) => {
            return location.pathname;
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
