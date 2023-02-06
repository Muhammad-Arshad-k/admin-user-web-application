import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup =()=>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [cPassword,setCPassword] = useState('')

    const {signup,error,isLoading} = useSignup()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signup(name,email,phone,password)
    }

    return(
       <form action="" onSubmit={handleSubmit} className="signup">
        <h3 className='title'>Sign up</h3>
        <label htmlFor="">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name='name' id='name' />
        <label htmlFor="">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name='email' id='email' />
        <label htmlFor="">phone</label>
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" name='phone' id='phone' />
        <label htmlFor="">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" name='password' id='password'/>
        <label htmlFor="">Confirm Password</label>
        <input value={cPassword} onChange={(e)=>setCPassword(e.target.value)} type="text" name='cpassword' id='cpassword'/>
        <button disabled={isLoading} type='submit'>signup</button>
        {error&& <div className="error">{error}</div>}
       </form>

        
    )
}

export default Signup