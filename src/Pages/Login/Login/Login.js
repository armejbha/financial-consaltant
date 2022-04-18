import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        // console.log(user?.user?.email);
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        // if (email !== user?.user?.email) {
        //     errorElement = <p className='text-danger'>Error:'Email don't match'</p>
        // }
    }
    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email');
        }
    }
    return (
        <div>
            <div className='w-25 mx-auto border p-4 mt-4'>
                <h2 className='text-primary text-center'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='mt-2 '><Link to="/login" onClick={forgetPassword} className='text-decoration-none'>forget password?</Link></p>
                    {errorElement}
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button variant="primary" type="submit" className='px-5'>
                            Login
                        </Button>
                    </div>
                </Form>
                <p className='text-center mt-2 '>Don't have an account?<Link to="/register" className='text-decoration-none'>Create One</Link></p>
                <Social></Social>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;