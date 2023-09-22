import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import Applied from "./Components/Home/Applied";
import Jobs from "./Components/Home/Jobs";
import Blogs from "./Components/Home/Blogs";
import Error from "./Components/ErrorPage/Error";
import JobDetails from "./Components/Home/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
