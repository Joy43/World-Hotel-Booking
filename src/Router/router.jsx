import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/Errorpage/Errorpage";
import RoomDeatils from "../Pages/RoomDetails/RoomDeatils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room/:id",
        element: <RoomDeatils></RoomDeatils>,
      },
    ],
  },
]);
