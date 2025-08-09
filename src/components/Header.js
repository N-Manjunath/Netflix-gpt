import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector( store=>store.user);
  const Handlesignout=()=>
  {
      signOut(auth).then(() => {
      navigate("/");
    
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='p-2 px-8 flex justify-between'>
      <img
        className="w-44 p-2"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-img"
      />
      {user?.uid && (<div className='p-5 mx-1 my-2'>
        <button className='bg-red-600 text-white p-2 rounded-md'onClick={Handlesignout}>Sign out</button>
      </div>)}
    </div>
  );
};

export default Header;
