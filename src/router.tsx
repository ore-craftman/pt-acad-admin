import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BaseRoute from "./pages/BaseRoute";

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
