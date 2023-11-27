import { checkActionCode } from 'firebase/auth';
import React from 'react';
import AdminDashboard from './DashboardRoutes/AdminDashboard/AdminDashboard';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import EmployeeDashboard from './DashboardRoutes/EmployeeDashboard.jsx/EmployeeDashboard';

const DashboardMain = () => {
    const {checkUser} =CheckUser()
    return (
       <>
       {
        checkUser === 'admin'&& <AdminDashboard></AdminDashboard> || checkUser === 'employee' && <EmployeeDashboard></EmployeeDashboard> 
       }
       </>
    );
}

export default DashboardMain;
