import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home } from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services/ServicesPage";
import { Doctors } from "../pages/Doctors/Doctors";
import { DoctorDetails } from "../pages/Doctors/DoctorDetails";
// import { Login } from "../pages/Login";
import Error from "../pages/Error/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/doctor-details/:id",
        element: <DoctorDetails></DoctorDetails>,
      },
      {
        path: "/login",
        // element: <Login></Login>,
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
