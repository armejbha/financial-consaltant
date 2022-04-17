import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className=' bg-blue-600'>
            <p className='text-center py-16 text-2xl font-semibold'><small>Copyright <span>&#169;</span>{year}</small></p>
        </div>
    );
};

export default Footer;