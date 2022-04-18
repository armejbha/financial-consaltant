import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error || updateError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {updateError?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }
    return (
        <div>
            <div className='w-25 mx-auto border p-4 mt-4'>
                <h2 className='text-primary text-center'>Please Register</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                        <Form.Control ref={nameRef} type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Accept all Terms and Condition" />
                    </Form.Group>
                    {errorElement}
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button disabled={!agree} variant="primary" type="submit" className='px-5'>
                            Register
                        </Button>
                    </div>
                </Form>
                <p className='text-center mt-2 '>Already have an account?<Link to="/login" className='text-decoration-none'>Login Here</Link></p>
                <Social></Social>
            </div>
        </div>
    );
};

export default Register;