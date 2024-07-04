import React from 'react'
import Netflix from '../assets/images/Netflix.png';
import {auth} from '../utils/firebase'
import { signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Header = () => { 
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);

  const handleSignOut= ()=>{
signOut(auth).then(() => {
navigate("/")
}).catch((error) => {
   // an error occured
   navigate("/error")
});

    

  }
  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className='w-44' src={Netflix} alt="netflix-logo" />
{ user && (  <div className='flex p-2 '>
      <img className='w-12 h-12  rounded-md' src={user?.photoURL} alt="user-logo"/>
      <button onClick={handleSignOut} className='cursor-pointer p-4 text-white font-bold'>Sign Out </button>
    </div>)}
    </div>
  )
}

export default Header
