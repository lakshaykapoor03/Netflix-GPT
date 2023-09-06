import React from 'react'
import SignUpForm from './SignUpForm'
import Header from './Header'
import { BG_URL } from '../utils/constants'



const SignUpPage = () => {
  return (
    <div>
      <Header/>
       <img className="" src={BG_URL} alt="" /> 
       <SignUpForm/>
       
    </div>
  )
}

export default SignUpPage