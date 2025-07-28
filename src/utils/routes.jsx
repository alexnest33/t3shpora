import { createBrowserRouter } from "react-router";
import content from './content'
import ConstructorOfTopic from "../components/ConstructorOfTopic";
import App from "../components/App";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: content.map((items) => {
      const { path, title, content } = items;
      return {
        path: path,
        element: <ConstructorOfTopic title={title} content={content} />,
      };
    }),
  },
]);

export default routers;