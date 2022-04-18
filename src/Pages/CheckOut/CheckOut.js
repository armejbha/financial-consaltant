import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceid } = useParams();
    console.log(serviceid)
    return (
        <div className='mt-4'>
            <p className='text-center fw-bold fs-5'>Please Complete this form</p>
            <div className='w-50 mx-auto border border-3 p-5'>
                <form className="row g-3">
                    <div class="col-md-6">
                        <label for="FirstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="FirstName" required />
                    </div>
                    <div class="col-md-6">
                        <label for="LastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="LastName" required />
                    </div>
                    <div className="col-md-12">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-md-12">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address </label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" required />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" required />
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
                        <input type="text" className="form-control" id="inputZip" required />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Accept all Terms and Condition
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