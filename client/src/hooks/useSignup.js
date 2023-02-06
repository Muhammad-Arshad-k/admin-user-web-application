import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useSignup = ()=>{
   const [error,setError] = useState(null)
   const [isLoading,setIsLoding]= useState(null)
   const {dispatch} =useAuthContext()

   const signup = async(name,email,phone,password)=>{
    setIsLoding(true)
    setError(null)

    const response = await fetch('/api/user/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,email,phone,password})
    })
    const json = await response.json()

    if(!response.ok){
        setIsLoding(false)
        setError(json.error)
    }
    if(response.ok){
        //save the user to local storage
        localStorage.setItem('user',JSON.stringify(json))

        //update auth context
        dispatch({type:'LOGIN',payload:json})
        setIsLoding(false)
    }
   }

   return {signup,isLoading,error}
}