import React from 'react'
import './Login.css'
import { Navbar } from '../components'

const Login = () => {
  return (
    <>
        <Navbar/>
        <div className='login'>
            <h1>Login</h1>
            
            <p>Email</p>
            <input type="text" id="email"/>
            <p>Password</p>
            <input type="text" id="password"/>
            
            <button>Login</button>
        </div>
    </>
  )
}

export default Login
