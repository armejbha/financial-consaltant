import React from 'react';
import photo from '../../../images/contract/contact1.png'
const Contract = () => {
    return (
        <div className='container my-5'>
            <div className='w-100 px-4 mx-auto d-block'>
                <div className='row shadow-lg rounded-3 p-5'>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                        <img className='w-75 ' src={photo} alt="" />
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <div className=''>
                            <form>
                                <h2 className='text-center mb-5'>Contact Me</h2>
                                <div className="form-group">
                                    <input type="text" name="name" id="fullname" className="form-control w-75 mx-auto bg-one py-3 rounded-pill ps-5" placeholder='Name' />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="email" id="email" className="form-control w-75 mx-auto bg-one py-3 rounded-pill ps-5" placeholder='Email' />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="subject" id="email" className="form-control w-75 mx-auto bg-one py-3 rounded-pill ps-5" placeholder='Subject' />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea name="msg" msg cols="30" rows="5" id="" className="form-control w-75 mx-auto bg-one py-3 rounded-3 ps-5" placeholder='Message'></textarea>
                                </div>
                                <div className="form-group mt-4">
                                    <button type="button" id="post" className="btn btn-primary mx-auto d-block px-5 py-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;