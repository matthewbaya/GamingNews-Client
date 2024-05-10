import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import Homepage from "../pages/pub-articles.jsx";
import HomepageDetail from "../pages/pub-articles-detail.jsx";
import Login from "../pages/cms-login.jsx";
import Register from "../pages/cms-register.jsx";
import CmsHomepage from "../pages/cms-home.jsx";

const router = createBrowserRouter([
  {
    path: "/cms",
    element: <CmsHomepage />,
  },
  {
    path: "/cms/login",
    element: <Login></Login>,
  },
  {
    path: "/cms/register",
    element: <Register></Register>,
  },
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "/detail/:id",
    element: <HomepageDetail></HomepageDetail>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
