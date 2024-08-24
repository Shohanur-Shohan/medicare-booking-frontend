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

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
          path: "/doctors-details",
          element: <DoctorDetails></DoctorDetails>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <SignUp></SignUp>,
        },
    ]
      
  },
  
]);