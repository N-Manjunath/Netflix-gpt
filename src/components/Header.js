import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect} from 'react';
import { auth } from '../utils/firebase';
import { useNavigate} from 'react-router-dom'; // 👈 1. Import useLocation
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_IMG } from '../utils/constants';
import { togglesearchgpt } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignout = () => {
    signOut(auth).catch((error) => console.error(error));
  };
  const Searchgpt = () => {
    dispatch(togglesearchgpt());
  };


  return (
    <div 
      className={'px-4 flex justify-between items-center fixed top-0 left-0 w-full z-50'}
    >
      <img className="w-44" src={LOGO_IMG} alt="logo-img" />
      {user && (
        <div className="flex items-center">
          <button className='p-2 m-2 bg-purple-600 text-white rounded-md' onClick={Searchgpt}>Search Gpt</button>
          <button
            className="bg-red-600 text-white p-2 rounded-md cursor-pointer hover:bg-red-700"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;