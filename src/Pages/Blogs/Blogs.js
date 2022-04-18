import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-3'>Blogs For Finance Consaltant</h2>
            <div className='row'>
                <div className='col-12 shadow-lg rounded-3 mt-2 p-4'>
                    <h3 className='text-center text-info'>What is the different between Authentication and Authorization?</h3>
                    <div className='row mt-4'>
                        <div className='col-6  border-end'>
                            <h5 className='text-center border-bottom border-primary w-50 mx-auto mt-3'>Authentication</h5>
                            <p>
                                <FontAwesomeIcon icon={faAnglesRight} className='me-2'></FontAwesomeIcon>
                                Authentication defines user itentity,who is the user.
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faAnglesRight} className='me-2'></FontAwesomeIcon>
                                It is work through password,verifies email and many other information which collect form a user.
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faAnglesRight} className='me-2'></FontAwesomeIcon>
                                Authencation is dependable on user,a user can change it.
                            </p>
                        </div>
                        <div className='col-6 border-start'>
                            <h5 className='text-center border-bottom border-primary w-50 mx-auto mt-3 '>Authorization</h5>
                            <p>
                                <FontAwesomeIcon icon={faAnglesRight} className='me-2'></FontAwesomeIcon>
                                Authorization determines which resources a user can access.
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faAnglesRight} className='me-2'></FontAwesomeIcon>
                                Authorization works some setting that is implemented and maintained by a organization.
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faAnglesRight} className='me-2'></FontAwesomeIcon>
                                Authorization don't dependable on a user,user can access some resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex mb-5'>
                <div className='w-50 shadow-lg rounded-3 mt-5 p-4 g-4'>
                    <h3 className='text-center text-info'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='mt-4 text-align'>Firebase is authentication tools that provided by google.It's highly secure form other authentication systerm.I use it for it's backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to my app. It supports authentication using passwords, phone numbers, popular identity providers like Google, Facebook,Github,Twitter, and more.I also have implement authentication.I can do my application authentication to use Auth0,Amazon Cognito,Okta but i am compatible use firebase authentication.</p>
                </div>
                <div className='w-50 shadow-lg rounded-3 mt-5 p-4 ms-3'>
                    <h3 className='text-center text-info'>What other services does firebase provide other than authentication?</h3>
                    <p className='mt-5 text-align'>Generally we are useing firebase for authentication.Firebase have many other option except authentication.Without authentication firebase mostly use hosting.It's provided a hosting service if you need better service you can access firebase premium option.Except authentication and hosting it also provided database firebase call it firestore database.It also have realtime database,some functionality,and if you can want you can learn machine learning form here.Overall this is amazing.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs; <h2>This is blogs section</h2>