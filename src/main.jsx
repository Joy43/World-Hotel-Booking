import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import AuthProviders from "./Authentication/AuthProvider";
import { router } from "./Router/router";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        {/* <Toaster> */}
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
        {/* </Toaster> */}
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
