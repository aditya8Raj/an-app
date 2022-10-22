import React from 'react'
import { auth } from "../firebase-config";

const Home = () => {
  return (
    <div>HOME PAGE!!
    <p>Welcome back</p> <h1>{auth.currentUser.email}</h1>
    </div>
  )
}

export default Home