import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin =()=>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoding]= useState(null)
    const {dispatch} =useAuthContext()

    const login = async (email,password)=>{
        setIsLoding(true)
        setError(null)

        const response = await fetch('/api/user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoding(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            setIsLoding(false)
        }
    }
    return {login,error,isLoading}
} 