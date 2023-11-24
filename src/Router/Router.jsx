import { createBrowserRouter } from "react-router-dom";
import Routes from "../Routes/Routes";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardMain from "../Pages/Dashboard/DashboardMain";
import Employess from "../Pages/Dashboard/Employess";
import Progress from "../Pages/Dashboard/Progress";
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
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/main',
                element: <DashboardMain></DashboardMain>
            },
            {
                path:'/dashboard/employee-list',
                element:<Employess></Employess>
            }
            ,
            {
                path:'/dashboard/progress',
                element:<Progress></Progress>
            }
        ]
    }
])


export default router