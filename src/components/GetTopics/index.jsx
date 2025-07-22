import { createBrowserRouter } from "react-router";
import navigation from "../Navigation";
import SwitchFunc from "./SwitchFunc"



    const routers = createBrowserRouter[
        {path: "/",element: <App/>,children:navigation.map(items => {
            const {path,title,content} = items;
            return{
                path:path,
                element: <SwitchFunc title={title} content={content}/>
            }
        })}]

    export default routers





