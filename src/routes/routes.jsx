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
import ManageAllProducts from "../pages/dashboard/ManageAllProducts";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/dashboard/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "edit-profile/:id",
        element: <EditProfile />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/get/${params.id}`),
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product",
        element: <UpdateProduct />,
      },
      {
        path: "manage-products",
        element: <ManageAllProducts />,
      },
    ],
  },
]);
