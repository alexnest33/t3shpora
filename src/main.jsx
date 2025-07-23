import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import routers from "./components/GetTopics/index.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />,
);
