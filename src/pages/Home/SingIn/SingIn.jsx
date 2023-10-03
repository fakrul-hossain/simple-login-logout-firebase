import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../../firebase/firebase.init';

const SingIn = () => {
    const [userName,setUserName] = useState();
    const [userPhoto,setUserPhoto] = useState();
    const [userEmail,setUserEmail] = useState();
    const [user,setUser] = useState();
    const auth = getAuth(app)
    const googleProvider = new  GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user
            setUser(user)
            console.log(user.displayName);
            setUserName(user.displayName)
            setUserEmail(user.email)
            setUserPhoto(user.photoURL)
        })
        .then(error=>{
            console.log(error);
        })
    }

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            {user && <div>
                <img src={userPhoto} alt="" />
                <p>Your Name: {userName}</p>
                <p>Your Name: {userEmail}</p>
                </div>}
            <button onClick={handleGoogleSignIn} className='text text-2xl bg-green-500 text-white font-medium px-3 py-2 rounded-md'>
                Sign In Google
            </button>
        </div>
    );
};

export default SingIn;