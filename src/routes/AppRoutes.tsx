import { useRoutes } from "react-router-dom"
import Home from "../pages/home/home"
import ErrorHandler from "../pages/error/error-handler"
import Maincontainer from "../pages/login/mainContainer"



const AppRoutes = () =>{

    let element = useRoutes([
        {
            path:"/",
            element:<Maincontainer/>
        },
        
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/*",
            element:<ErrorHandler/>
        },
    ])

    return element;
}


export default AppRoutes;