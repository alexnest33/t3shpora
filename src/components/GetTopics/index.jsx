import { createBrowserRouter } from "react-router";
import navigation from "../Navigation";



const routers = createBrowserRouter[
    {path: "/",element: <App/>,children:navigation.map(items => {
        const {path,title,content} = items;
        return{
            path:path,
            element: 
        }
    })},

]