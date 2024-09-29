// import { useRef, useState } from 'react';
import {useRef, useState} from 'react';
import Header from './Header'
import checkValidData from '../utils/validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Handle Form Validation...
    console.log(email.current.value, password.current.value);
    setErrorMessage(checkValidData(email.current.value, password.current.value));
    if(errorMessage) return ;

    if(!isSignInForm) {
      // signIn logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
        // SignUp 
        const user = userCredential.user;
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    } else {
      // signUp logic
    }

    console.log(setErrorMessage);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg'
            alt="bg"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
            <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-600 font-bold text-lg py-4'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login