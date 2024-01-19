import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOut/HomeLayout";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Utilities/Error/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import TodaysOffer from "../Pages/TodaysOffer/TodaysOffer";

import Menue from "../Pages/Menu/Menu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/TodaysOffer",
        element: <TodaysOffer />,
      },
      {
        path: "/Menu",
        element: <Menue />,
      },
    ],
  },
]);

export default router;
