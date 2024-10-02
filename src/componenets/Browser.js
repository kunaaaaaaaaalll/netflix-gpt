import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Browser = () => {
  const navigate = useNavigate();
 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate('/');
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className='flex justify-end'>
      <Header/>
      <div className='flex p-14 z-10'>
        <img
          className='w-12 h-12' 
          src='https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZ3fwg6oVNnYgmbv1d1MTUy3mKtfmTfds2ALI3JDVrbnkVBI3PvqU9kqgAkpnbzyru8p5JErnyTaEA2ZxmRFEMTIc70ci70.png?r=5a3' alt='userIcon'/>
        <button onClick={handleSignOut} className='bg-red-600'>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Browser;