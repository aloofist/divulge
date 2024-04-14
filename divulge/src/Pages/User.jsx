import React from 'react'
import { Navbar, Footer, CreatePost, UserPosts } from '../components'
import './User.css'

const User = () => {
  return (
    <>
    <Navbar/>
    <CreatePost/>
    <UserPosts/>

    <div className='logout-area'>
      <a href="#">
        <button id='logout-btn'>Logout</button>
      </a>
    </div>

    <div>
        <a href="#login">Login page</a>
        <br/>
        <a href="#signup">Signup page</a>
      </div>

    <Footer/>
    </>
  )
}

export default User
