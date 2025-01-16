import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Community from "../pages/Coummunity/Community";
import PrivateRoute from "./PrivateRoute";
import PackageDetails from "../pages/PackageDetails/PackageDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Error page</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <h2>Tour</h2> },
          { path: "/guide", element: <>Guird</> },
        ],
      },
      {
        path: "package/:id",
        element: <PackageDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/package/${params.id}`),
      },
      {
        path: "community",
        element: (
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
