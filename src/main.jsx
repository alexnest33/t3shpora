import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import routers from "./components/GetTopics/index.jsx";

let router = createBrowserRouter(routers);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
