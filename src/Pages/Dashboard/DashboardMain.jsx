import { checkActionCode } from 'firebase/auth';
import React from 'react';
import AdminDashboard from './DashboardRoutes/AdminDashboard/AdminDashboard';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import EmployeeDashboard from './DashboardRoutes/EmployeeDashboard.jsx/EmployeeDashboard';
import HrDashboard from './DashboardRoutes/HrDashboard/HrDashboard';

const DashboardMain = () => {
    const {checkUser} =CheckUser()
    console.log(checkUser)
    return (
       <>
       {
        checkUser === 'admin'&& <AdminDashboard></AdminDashboard> || checkUser === 'employee' && <EmployeeDashboard></EmployeeDashboard> || checkUser === 'hr' && <HrDashboard></HrDashboard>
       }
       </>
    );
}

export default DashboardMain;