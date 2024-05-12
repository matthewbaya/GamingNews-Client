import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Homepage from "../pages/pub-articles.jsx";
import HomepageDetail from "../pages/pub-articles-detail.jsx";
import Login from "../pages/cms-login.jsx";
import CmsHomepage from "../pages/cms-home.jsx";
import ArticleEdit from "../pages/cms-edit-article.jsx";
import CategoryPage from "../pages/cms-categories.jsx";
import RegisterUserPage from "../pages/cms-RegisterUser.jsx";
import ImageEdit from "../pages/cms-edit-image.jsx";

const router = createBrowserRouter([
  {
    path: "/cms/login",
    element: <Login></Login>,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/cms");
      } else {
        return null;
      }
    },
  },
  {
    path: "/cms/register",
    element: <RegisterUserPage></RegisterUserPage>,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/cms/login");
      } else {
        return null;
      }
    },
  },
  {
    path: "/cms",
    element: <CmsHomepage />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/cms/login");
      } else {
        return null;
      }
    },
  },
  {
    path: "/cms/categories",
    element: <CategoryPage></CategoryPage>,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/cms/login");
      } else {
        return null;
      }
    },
  },
  {
    path: "cms/edit/article/:id",
    element: <ArticleEdit></ArticleEdit>,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/cms/login");
      } else {
        return null;
      }
    },
  },
  {
    path: "cms/edit/image/:id",
    element: <ImageEdit></ImageEdit>,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/cms/login");
      } else {
        return null;
      }
    },
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
