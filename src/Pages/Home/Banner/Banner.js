import React from 'react';
import banner from '../../../images/banner/banner.jpg';
const Banner = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-12 col-lg-6 my-auto'>
                    <h3>HI,I am Finance Consaltant.</h3>
                    <p className='text-align'>This is my working website.Here have some service which i am provide and my some information and how people contact with me.I am help or consaltant those people who can not get any perfect decision any financial planning,investment,taxes,bank loan who get,insurance and how to perfectly use retirement money.</p>
                    <button className='btn btn-primary px-4'>Explore</button>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className='w-100 mx-auto' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;