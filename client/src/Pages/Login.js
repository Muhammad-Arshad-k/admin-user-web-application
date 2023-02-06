
import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const Login =()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    //destructuring the datas
    const {login,error,isLoading} = useLogin()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await login(email,password)
    }

    return(
       <form action="" onSubmit={handleSubmit} className="signup">
        <h3 className='title'>Login</h3>
        <label htmlFor="">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name='email' id='email' />
        <label htmlFor="">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" name='password' id='password'/>
        <button disabled={isLoading} type='submit' className='button'>Login</button>
        {error && <div className='error'>{error}</div>}
       </form>
    )
}

export default Login