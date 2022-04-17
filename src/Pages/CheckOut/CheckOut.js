import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceName } = useParams('');
    // console.log(serviceName);
    return (
        <div className='mt-4'>
            <h3 className='text-center'>Service:<span className='fw-light'>{serviceName}</span> </h3>
            <p className='text-center fw-bold fs-5'>Please Complete this form for our best Service</p>
            <div className='w-50 mx-auto border p-3'>
                <form className="row g-3">
                    <div class="col-md-6">
                        <label for="FirstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="FirstName" />
                    </div>
                    <div class="col-md-6">
                        <label for="LastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="LastName" />
                    </div>
                    <div className="col-md-12">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="col-md-12">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address </label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary px-5">Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;