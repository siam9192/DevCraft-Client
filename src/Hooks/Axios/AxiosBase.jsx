import React from 'react';
import axios from 'axios';
const AxiosBase = () => {
 const instance = axios.create({
    baseURL:"http://localhost:8000"
 })
 return instance;
}

export default AxiosBase;
