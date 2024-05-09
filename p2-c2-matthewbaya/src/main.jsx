import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import Homepage from "../pages/pub-articles.jsx";
import HomepageDetail from "../pages/pub-articles-detail.jsx";

const router = createBrowserRouter([
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
