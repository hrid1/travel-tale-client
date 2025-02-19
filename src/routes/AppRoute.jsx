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
import AssignedTours from "../pages/Dashboard/Guide/AssignedTours";
import Payment from "../pages/Dashboard/Payment/Payment";
import GuideRoute from "./GuideRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutDeveloper from "../pages/AboutDeveloper/AboutDeveloper";
import TouristRoute from "./TouristRoute";
import Reviews from "../pages/Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <TourGuideProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "/trips",
        element: (
          <PrivateRoute>
            <Trips />
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/aboutDeveloper",
        element: <AboutDeveloper />,
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
        element: (
          <PrivateRoute>
            <ManageProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-stories",
        element: (
          <PrivateRoute>
            <AddStory />
          </PrivateRoute>
        ),
      },
      {
        path: "update-story/:id",
        element: (
          <PrivateRoute>
            <UpdateStories />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      // for tourist
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <TouristRoute>
              <MyBookings />
            </TouristRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "tourist-manage-stories",
        element: (
          <PrivateRoute>
            <TouristRoute>
              <ManageStories />
            </TouristRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "tourist-add-stories",
        element: (
          <PrivateRoute>
            <TouristRoute>
              <AddStory />
            </TouristRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "join-guide",
        element: (
          <PrivateRoute>
            <TouristRoute>
              <JoinAsTourGuide />
            </TouristRoute>
          </PrivateRoute>
        ),
      },
      // for guide
      {
        path: "my-assigned-tours",
        element: (
          <PrivateRoute>
            <GuideRoute>
              <AssignedTours />
            </GuideRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "guide-manage-stories",
        element: (
          <PrivateRoute>
            <GuideRoute>
              <ManageStories />
            </GuideRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "guide-add-stories",
        element: (
          <PrivateRoute>
            <GuideRoute>
              <AddStory />
            </GuideRoute>
          </PrivateRoute>
        ),
      },

      // for admin
      {
        path: "add-package",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddPackage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-candidates",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCandidate />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
