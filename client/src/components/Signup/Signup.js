import React,{useState} from 'react'

function Signup() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [cpassword,setCpassword] = useState('');
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(email);
  }
  
  return (
    <>
    <form onSubmit={handleSubmit} action="">
        <label htmlFor="usename">Name</label>
        <input type="text" value={name} onChange={()=>setName}  id="name" name="name" />
        <label htmlFor="">email</label>
        <input type="text" value={name} onChange={()=>setEmail} placeholder='example@gmail.com' name='email' id='email'/>
        <label htmlFor="">Phone</label>
        <input value={phone} type="phone" onChange={()=>setPhone} id="phone" name='phone' />
        <label htmlFor="password">Password</label>
        <input value={password} type="password" onChange={()=>setPassword} name='password' id='password' />
        <label htmlFor="password">Confirm password</label>
        <input value={cpassword} type="password" onChange={()=>setCpassword} name='cpassword' id='cpassword' />
        <button>Sign Up</button>
    </form>
    <button>Already a user? Login</button>
    </>
  )
}

export default Signup