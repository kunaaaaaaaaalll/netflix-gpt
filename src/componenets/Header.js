import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
          const { uid, email, displayName } = user;
          dispatch(addUser({'uid': uid, 'email': email, 'displayName': displayName}));
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/');
        }
      });

    //unsubscribe when component UnMounts...
    return () => unsub();
}, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
        <img
        className='w-44 mask mask-circle' 
        src="https://imgs.search.brave.com/7mb-IlMRODiTrpfLjtXyypwfqwkN3xTBozYuqCbcB1k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy83NTAwL05ldGZs/aXhfTG9nb19SR0It/NTEyLnBuZw" alt="logo"/>
    </div>
  )
}

export default Header