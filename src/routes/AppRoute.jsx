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
import AdminRoute from "./AdminRoute";
import ManageProfile from "../pages/Dashboard/common/ManageProfile";
import MyBookings from "../pages/Dashboard/Tourist/MyBookings";
import JoinAsTourGuide from "../pages/Dashboard/Tourist/JoinAsGuide";
import ManageCandidate from "../pages/Dashboard/Admin/ManageCandidate";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddPackage from "../pages/Dashboard/Admin/AddPackage";
import TourGuideProfile from "../pages/TourGuideProfile/TourGuideProfile";
import AddStory from "../pages/Dashboard/common/AddStory";
import ManageStories from "../pages/Dashboard/common/ManageStories";
import UpdateStories from "../pages/Dashboard/common/UpdateStories";
import Trips from "../pages/Trips/Trips";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Error page</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "package/:id",
        element: (
          <PrivateRoute>
            <PackageDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/package/${params.id}`),
      },
      {
        path: "user/guide/:email",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/user/guide/${params.email}`),
        element: <TourGuideProfile />,
      },
      {
        path: "community",
        element: (
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        ),
      },
      {
        path: "/trips",
        element: <Trips />,
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
        element: <ManageProfile />,
      },
      {
        path: "add-stories",
        element: <AddStory />,
      },
      {
        path: "update-story/:id",
        element: <UpdateStories />,
      },
      // for tourist
      {
        path: "my-bookings",
        element: <MyBookings />,
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
        element: <JoinAsTourGuide />,
      },
      // for guide
      {
        path: "my-assigned-tours",
        element: <h2> Guide My Assign Tours</h2>,
      },
      {
        path: "guide-manage-stories",
        element: <ManageStories />,
      },
      {
        path: "guide-add-stories",
        element: <AddStory />,
      },

      // for admin
      {
        path: "add-package",
        element: (
          <AdminRoute>
            <AddPackage />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-candidates",
        element: <ManageCandidate />,
      },
    ],
  },
]);
