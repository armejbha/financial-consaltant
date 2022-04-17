import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='border-bottom mb-2'></div>
            <p className='text-center fw-bold'>Or login with</p>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='w-75 mx-auto d-block bg-primary border-0 py-2 rounded-2'>
                <img src={google} alt="" />
                <span className='fw-normal px-2 font-light'>Google</span>
            </button>
            <button onClick={() => signInWithGithub()} className='w-75 mx-auto d-block bg-primary border-0 py-2 rounded-2 mt-2'>
                <img src={github} alt="" />
                <span className='fw-normal px-2 font-light'>Github</span>
            </button>
        </div>
    );
};

export default Social;