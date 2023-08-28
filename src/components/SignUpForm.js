import React, {useState, useRef} from 'react'
import { checkValidData } from '../utils/validate'

const SignUpForm = () => {
    const [signIn, setSignIn] = useState(true)
    const [errorMessage, setErrorMessage] =  useState("")
    const fullname = useRef(null)
    const email = useRef(null)
    const password= useRef(null)


    const handleButtonClick = ()=>{
        console.log(fullname.current.value)
console.log(email.current.value)
console.log(password.current.value)
const message = checkValidData(fullname.current.value, email.current.value,password.current.value)
setErrorMessage(message)
    }

    const changeToSignUp= ()=>{
        setSignIn(!signIn)
      
    }
  return (
    <div className="absolute top-[30vh] left-[40vw] text-white bg-black/75 py-6 px-8">
        {!signIn?<h1 className="text-3xl font-bold">Sign Up</h1>:<h1 className="text-3xl font-bold">Sign In</h1>}
        <form onSubmit={(e)=> e.preventDefault()} action="">
            {!signIn&& <input ref={fullname}  className="block bg-gray-800 p-3 w-80 rounded my-4" type="text" placeholder="Full Name"/>}
        <input ref={email} className="block bg-gray-800 p-3 w-80 rounded my-4" type="text" placeholder="abc@xyz.com" />
        <input ref={password} className="block bg-gray-800 p-3 w-80 rounded my-4" type="password" name="" id="" placeholder="Password"/>
        {!signIn?<button onClick={handleButtonClick} className="bg-red-700 p-2 my-2 block w-80 rounded">Sign Up</button>:<button onClick={handleButtonClick} className="bg-red-700 p-2 my-2 block w-80 rounded">Sign In</button>
       }
       <p className="text-center text-lg font-bold text-red-700 my-2">{errorMessage}</p>
        </form>
        
        {!signIn ?<p className=" p-2 my-4 block w-80 text-center text-gray-400">Already registered? <span onClick={changeToSignUp} className="underline cursor-pointer text-white">Sign in now....</span></p>:<p className=" p-2 my-4 block w-80 text-center text-gray-400">New to  netflix? <span onClick={changeToSignUp} className="underline cursor-pointer text-white"> Sign Up Now...</span></p>}
    </div>
  )
}

export default SignUpForm