import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Routers";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthPovider> */}
      <HelmetProvider>
        <RouterProvider router={Router} />
        <Toaster />
      </HelmetProvider>
      {/* </AuthPovider> */}
    </QueryClientProvider>
  </React.StrictMode>
);
