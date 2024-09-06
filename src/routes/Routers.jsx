import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home } from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { Doctors } from "../pages/Doctors/Doctors";
import { DoctorDetails } from "../pages/Doctors/DoctorDetails";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import Error from "../pages/Error/Error";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error/>,
    children: [
        {
          path: "/",
          errorElement: <Error/>,
          element: <Home></Home>,
        },
        {
          path: "/contact",
          errorElement: <Error/>,
          element: <Contact></Contact>,
        },
        {
          path: "/services",
          errorElement: <Error/>,
          element: <Services></Services>,
        },
        {
          path: "/doctors",
          errorElement: <Error/>,
          element: <Doctors></Doctors>,
        },
        {
          path: "/doctors-details",
          errorElement: <Error/>,
          element: <DoctorDetails></DoctorDetails>,
        },
        {
          path: "/login",
          errorElement: <Error/>,
          element: <Login></Login>,
        },
        {
          path: "/register",
          errorElement: <Error/>,
          element: <SignUp></SignUp>,
        },
    ]
      
  },
  
]);