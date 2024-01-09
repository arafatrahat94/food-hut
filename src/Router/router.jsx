import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOut/HomeLayout";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Utilities/Error/ErrorPage";

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
    ],
  },
]);

export default router;
