import React from 'react'
import './SignUp.css'
import { Navbar } from '../components'

const SignUp = () => {
  return (
    <>
        <Navbar/>
        <div className='login'>
            <h1>Create your Divulge account</h1>
            
            <p>Name</p>
            <input type="text" id="name"/>
            <p>Email</p>
            <input type="text" id="email"/>
            <p>Password</p>
            <input type="text" id="password"/>
            
            <span>
                <input type="checkbox"/>
                <p>Agree to Divulge's <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></p>
            </span>
        </div>
    </>
  )
}

export default SignUp
