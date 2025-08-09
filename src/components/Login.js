import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidation } from '../utils/validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
    const[signin,setsignin]=useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const email=useRef();
        const password=useRef();
        const displayname=useRef();
        const[errormsg,seterrmsg]=useState(null);
    const togglesigninform=()=>
    {
        setsignin(!signin);
    }
    const validate=()=>
    {
     const print=checkValidation(email.current.value,password.current.value);
    
    if(print)
      { seterrmsg(print);
        return;
      }
     if(!signin)
     {
      //sign up
createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(user, {
  displayName:displayname.current.value,
})
.then(() => {
  // Profile updated!
  const{uid,email,displayName}=auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));

    navigate("/browse");
    seterrmsg("user created !");
    console.log(errormsg);
  // ...
})
.catch((error) => {
  // An error occurred
  seterrmsg(errormsg);
  // ...
});
   
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    seterrmsg(errorCode);
    
    // ..
  });
     }
     else
     {
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        seterrmsg("user logged In !");
        navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    seterrmsg(errorCode);
  });
     }
    }
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="bg-img"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/40 to-black/90 -z-10" />

      {/* Logo/Header */}
      <Header />
      <form className='w-3/12 mx-auto my-16 py-8 h-3/4 px-16 bg-black opacity-80' onSubmit={(e)=>e.preventDefault()}>
      <h1 className='font-bold text-3xl text-white py-2 my-2'>{signin?'Sign In':'Sign up'}</h1>
      {!signin &&<input type='text' ref={displayname} placeholder='Enter Name' className='p-2 my-2 w-full bg-inherit  text-white border border-solid border-gray-50 rounded-sm'></input>}
        <input type='text' ref={email} placeholder='Email or mobile number' className='p-2 my-2 w-full text-white bg-inherit border border-solid border-gray-50 rounded-sm'></input>
        <input type='password' ref={password} placeholder='Password' className='p-2 my-2 w-full bg-inherit text-white border border-solid border-gray-50 rounded-sm'></input>
        <p className='text-red-600'>{errormsg}</p>
        <button type='submit' className='bg-red-600 p-2 my-2 w-full rounded-sm text-white' onClick={validate}>{signin?'Sign In':'Sign up'}</button>
        <p className='text-white cursor-pointer text-sm m-2' onClick={togglesigninform}>{signin?'New to neflix? Sign Up now':'Already Registered ! Sign In now'}</p>
      </form>
      
    </div>
  );
};

export default Login;
