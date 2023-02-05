import React,{useState} from 'react';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
      console.log(email);
    }

  return (
    <>
    <form onSubmit={handleSubmit} action="">
        <label htmlFor="">email</label><br/>
        <input value={email} type="email" onChange={()=>setEmail} placeholder='example@gmail.com' name='email' id='email'/><br/>
        <label htmlFor="password">Password</label><br/>
        <input value={password} type="password" onChange={()=>setPassword} name='password' id='password' /><br/>
        <button>Log In</button>
    </form>
    <button>Don't have an account? Signup</button>
    </>
  )
}

export default Login


