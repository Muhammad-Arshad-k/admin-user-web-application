import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
  const {logout} =  useLogout()
  const {user}   = useAuthContext()
  console.log(user)
  const handleClick =()=>{
      logout()
  }
  return (
    <header>
      <div className="container">
      <Link to="/" >
           <h1 style={{color:"#1d007b"}} >workout buddy</h1>
        </Link>
        <nav>
          {user && 
          (<div>
            <span>Welcome {user.email}</span>
            <button onClick={handleClick}>Log Out</button>
          </div>
          )}
           {!user && (
          <div>
            <Link to='/login'>Login  </Link>
            <Link to='/signup'>Signup</Link>
          </div>
           )}
        </nav>      
      </div>   
    </header>
  )
}

export default Navbar