import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    if (user) {
        navigate('/home');
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='w-25 mx-auto border p-4 mt-4'>
                <h2 className='text-primary text-center'>Please Register</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button variant="primary" type="submit" className='px-5'>
                            Register
                        </Button>
                    </div>
                </Form>
                <p className='text-center mt-2 '>Already have an account?<Link to="/register" className='text-decoration-none'>Login Here</Link></p>
                <Social></Social>
            </div>
        </div>
    );
};

export default Register;