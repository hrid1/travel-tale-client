import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Community from "../pages/Coummunity/Community";
import PrivateRoute from "./PrivateRoute";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import Dashboard from "../layouts/Dashboard";
import Profile from "../components/dashboard/Profile";
import AdminRoute from "./AdminRoute";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package/${params.id}`),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
      // for tourist
      {
        path: "my-bookings",
        element: <h2>My bookings</h2>,
      },
      {
        path: "tourist-manage-stories",
        element: <h3>Manage Story</h3>,
      },
      {
        path: "tourist-add-stories",
        element: <h3>Add Story</h3>,
      },
      {
        path: "join-guide",
        element: <h3>Join as tour guide</h3>,
      },
      // for guide
      {
        path: "my-assigned-tours",
        element: <h2> Guide My Assign Tours</h2>,
      },
      {
        path: "guide-manage-stories",
        element: <h3>Guide Manage Story</h3>,
      },
      {
        path: "guide-add-stories",
        element: <h3>Guide Add Story</h3>,
      },

      // for admin
      {
        path: "add-package",
        element: (
          <AdminRoute>
            <h3> Add Package </h3>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: <h3> Manage Users </h3>,
      },
      {
        path: "manage-candidates",
        element: <h3> Manage Candidates </h3>,
      },
      // for guide
    ],
  },
]);
