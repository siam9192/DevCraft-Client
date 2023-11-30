import { createBrowserRouter } from "react-router-dom";
import Routes from "../Routes/Routes";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardMain from "../Pages/Dashboard/DashboardMain";
import Employess from "../Pages/Dashboard/Employess";
import Progress from "../Pages/Dashboard/Progress";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/WorkSheet";
import EmployeeDetails from "../Pages/EmployeeDetails/EmployeeDetails";
import AllEmployees from "../Pages/Dashboard/AllEmployees";
import PrivateRoutes from "../Components/PrivateRoute/PrivateRoute";
import AdminRoutes from "../Components/AdminRoutes/AdminRoutes";
import HrRoutes from "../Components/HrRoutes/HrRoutes";
import EmployeeRoutes from "../Components/EmployeeRoutes/EmployeeRoutes";
import Contact from "../Pages/Contact/Contact";
import PrivateRoutes2 from "../Components/PrivateRoutes2/PrivateRoutes2";
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
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<PrivateRoutes2><Login></Login></PrivateRoutes2>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element: <DashboardMain></DashboardMain>
            },
            {
                path:'/dashboard/employee-list',
                element:<PrivateRoutes><Employess></Employess></PrivateRoutes>
            },
            {
                path:'/dashboard/all-employee-list',
                element:<PrivateRoutes><AdminRoutes><AllEmployees></AllEmployees></AdminRoutes></PrivateRoutes>
            }
            ,
            {
                path:'/dashboard/progress',
                element:<PrivateRoutes><HrRoutes><Progress></Progress></HrRoutes></PrivateRoutes>
            },
            {
                path:'/dashboard/payment-history',
                element:<PrivateRoutes><EmployeeRoutes>< PaymentHistory></PaymentHistory></EmployeeRoutes></PrivateRoutes>
            },
            {
                path:'/dashboard/work-sheet',
                element:<PrivateRoutes><EmployeeRoutes><WorkSheet></WorkSheet></EmployeeRoutes></PrivateRoutes>
            }
        ],

    }
    ,
    {
        path:'/details/:email',
        element:<EmployeeDetails></EmployeeDetails>
    }
])


export default router