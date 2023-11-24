
import axios from "axios";

const AxiosSecure = () => {
    const instance = axios.create({
        baseURL:"http://localhost:8000"
     })
     instance.interceptors.request.use(function(config){
   const token = localStorage.getItem('access_token');
   config.headers.authorization = `Access-token ${token}`
   return config;
     },function(error){
        return Promise.reject(error);
     })
     instance.interceptors.response.use(function (response){
        
        return response;
    },async(error)=>{
        const status = error.response.status;
     if(status === 401 || status === 403){
       await logout();
       navigate('/login')
     }
    })

    return instance;
}

export default AxiosSecure;
