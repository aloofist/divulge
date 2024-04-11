import React from 'react'
import { Navbar, Footer, CreatePost, UserPosts } from '../components'

const User = () => {
  return (
    <>
    <Navbar/>
    <CreatePost/>
    <UserPosts/>
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
