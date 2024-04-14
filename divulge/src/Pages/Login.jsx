import React from 'react'
import { Navbar } from '../components'

const Login = () => {
  return (
    <>
        <Navbar/>
        <div className='login'>
            <h1>Login to <span id="divulge-login">Divulge</span></h1>
            
            <p>Username</p>
            <input type="text" id="email" placeholder='e.g. aloofist'/>
            <p>Password</p>
            <input type="text" id="password" placeholder='It should be at least 8 characters long'/>
            
            <button>Login</button>
        </div>
    </>
  )
}

export default Login
