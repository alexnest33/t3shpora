import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import routers from "./utils/routes";

createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={routers} />
);
