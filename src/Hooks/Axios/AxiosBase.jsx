import React from 'react';
import axios from 'axios';
const AxiosBase = () => {
 const instance = axios.create({
    baseURL:"https://assinment-12-p9yo4ikig-siam-hasans-projects.vercel.app"
 })
 return instance;
}

export default AxiosBase;
