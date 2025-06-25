import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BaseRoute from "./pages/BaseRoute";
import Courses from "./pages/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseRoute />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/courses",
    element: <Courses />,
  },
  {
    path: "/*",
    element: (
      <div
        style={{
          margin: 10,
          minHeight: "99vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "600", fontSize: "18px" }}>
          404, Shade not found
        </p>
      </div>
    ),
  },
]);
