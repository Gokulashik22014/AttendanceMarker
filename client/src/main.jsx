import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Verify from "./pages/Verify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login-register",
    element: <LoginRegister />,
  },
  {
    path: "/verify/:id",
    element: <Verify />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
