import React, { useEffect } from 'react';
import Netflix from '../assets/images/Netflix.png';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      console.error('Sign-out error:', error);
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

  // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);


  const handleGptSearchClick = ()=>{
    // Toggle Search Button
    dispatch(toggleGptSearchView());

  }

  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={Netflix} alt="netflix-logo" />
      {user && (
        <div className='flex p-2'>
          <button className='py-2 rounded-lg px-4 mx-4 my-2 bg-white m-2 ' onClick={handleGptSearchClick}>GPT Search</button>
          <img className='w-12 h-12 rounded-md' src={user.photoURL} alt="user-logo" />
          <button onClick={handleSignOut} className='cursor-pointer p-4 text-white font-bold'>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
