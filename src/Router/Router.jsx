import { createBrowserRouter } from "react-router-dom";
import Routes from "../Routes/Routes";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Routes></Routes>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/'
    }
])


export default router