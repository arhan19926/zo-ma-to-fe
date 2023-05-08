import { useRoutes } from "react-router-dom"
import Home from "../components/home"
import Login from "../components/Login"
import ErrorHandler from "../components/error-handler"
import Maincontainer from "../components/main-container"



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