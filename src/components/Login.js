import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const[signin,setsignin]=useState(false);
    const togglesigninform=()=>
    {
        setsignin(!signin);
    }
    console.log(signin);
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
      <form className='w-4/12 mx-auto my-16 py-8 h-3/4 px-16 bg-black opacity-80'>
      <h1 className='font-bold text-3xl text-white py-2 my-2'>{signin?'Sign In':'Sign up'}</h1>
      {!signin &&<input type='text' placeholder='Enter Name' className='p-3 my-2 w-full bg-inherit  border border-solid border-gray-50 rounded-sm'></input>}
        <input type='text' placeholder='Email or mobile number' className='p-3 my-2 w-full  bg-inherit border border-solid border-gray-50 rounded-sm'></input>
        <input type='password' placeholder='Password' className='p-3 my-2 w-full bg-inherit  border border-solid border-gray-50 rounded-sm'></input>
        <button type='submit' className='bg-red-600 p-2 my-2 w-full rounded-sm text-white'>{signin?'Sign In':'Sign up'}</button>
        <p className='text-white cursor-pointer text-sm m-2' onClick={togglesigninform}>{signin?'New to neflix? Sign Up now':'Already Registered ! Sign In now'}</p>
      </form>
      
    </div>
  );
};

export default Login;
