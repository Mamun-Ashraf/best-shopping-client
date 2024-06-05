import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddProduct from "../pages/dashboard/AddProduct";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import AllProducts from "../pages/dashboard/AllProducts";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/dashboard/EditProfile";
import ViewProfile from "../pages/userProfile/ViewProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "view-profile",
        element: (
          <PrivateRoute>
            <ViewProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-profile/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/get/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
    ],
  },
]);
