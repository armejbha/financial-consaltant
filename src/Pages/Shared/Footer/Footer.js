import React from 'react';
import social1 from '../../../images/social/facebook.png';
import social2 from '../../../images/social/github.png';
import social3 from '../../../images/social/google.png';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='bg-primary py-5'>
            <h3 className='text-center'>Follow On Me</h3>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <img style={{ height: '30px' }} className='me-4' src={social1} alt="" />
                <img className='me-4' src={social2} alt="" />
                <img src={social3} alt="" />
            </div>
            <p className='text-center mt-4'><small>Copyright <span>&#169;</span> {year}</small> </p>
        </div>
    );
};

export default Footer;