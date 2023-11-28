import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import AxiosBase from '../Hooks/Axios/AxiosBase';

export const fireBaseContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(loading)
    const createUser = (email,password)=>{
        setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
   return signInWithEmailAndPassword(auth,email,password);
    }
    const logout = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        
const observer = onAuthStateChanged(auth,currentUser =>{
    console.log('way')
    if(currentUser){
      console.log('tru user')
      AxiosBase().post(`/api/v1/isFired`,{email:currentUser.email})
      .then(res => {
console.log('')
        console.log('fetching')
        if(res.data.isFired){
            logout();
            setLoading(false)
        }
        else{
            setUser(currentUser)
            setLoading(false)
            AxiosBase().post('/api/v1/jwt',{email:currentUser.email})
            .then(res => {
             localStorage.setItem('access-token',res.data.token)
            })
        }
      })
       
    
     
    }
    else{
        setUser(null);
        localStorage.removeItem('access-token')
      setLoading(false)
    }
        return ()=> observer();
})

    },[])
    return (
        <div>
           <fireBaseContext.Provider value={{user,loading,createUser,login,logout}}>
                 {children}
           </fireBaseContext.Provider>
        </div>
    );
}

export default AuthProvider;
