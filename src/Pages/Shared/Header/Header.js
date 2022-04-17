import React from 'react';
import CustomLink from '../../Custom/CustomLink/CustomLink';


const Header = () => {
    return (
        <nav className='bg-blue-600 py-4'>
            <div className='flex-column md:flex justify-center md:justify-between items-center mx-0 md:mx-16'>
                <h1 className='text-4xl font-bold text-amber-400'>Finance</h1>
                <ul className='flex-column text-center md:flex justify-center items-center '>
                    <li className='md:mt-0 mt-4'>
                        <CustomLink className=' mr-6 font-semibold text-lg px-2 py-1' to='/home'>HOME</CustomLink>
                    </li>
                    <li className='md:mt-0 mt-4'>
                        <CustomLink className=' mr-6 font-semibold text-lg px-2 py-1' to='/services'>SERVICES</CustomLink>
                    </li>
                    <li className='md:mt-0 mt-4'>
                        <CustomLink className=' mr-6 font-semibold text-lg px-2 py-1' to='/blogs'>BLOGS</CustomLink>
                    </li>
                    <li className='md:mt-0 mt-4'>
                        <CustomLink className=' mr-6 font-semibold text-lg px-2 py-1' to='/about'>ABOUT</CustomLink>
                    </li>
                    <li className='md:mt-0 mt-4'>
                        <CustomLink className='mr-6 font-semibold text-lg  px-2 py-1' to='/login'>LOGIN</CustomLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;