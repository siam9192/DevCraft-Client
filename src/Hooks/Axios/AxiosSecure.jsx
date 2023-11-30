
import axios from "axios";
import UseAuth from "../UserAuth/UseAuth";

const AxiosSecure = () => {
  const {logout} =UseAuth();
    const instance = axios.create({
        baseURL:"https://assinment-12-5zllfj1i3-siam-hasans-projects.vercel.app"
        // https://assinment-12-ilomo4eee-siam-hasans-projects.vercel.app
     })
console.log(1111)
     instance.interceptors.request.use(function(config){
   const token = localStorage.getItem('access-token');
   config.headers.authorization = `Access-token ${token}`
   return config;
     },function(error){
        return Promise.reject(error);
     })
     instance.interceptors.response.use(function (response){
      return response;
  },async(error)=>{
    
      console.log('error',error.response.status)
      const status = error.response.status;
   if(status === 401 || status === 403){
     await logout();
     navigate('/login')
   }
  })

    return instance;
}

export default AxiosSecure;
