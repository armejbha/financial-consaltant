import React from 'react';
import img from '../../../images/banner/banner1.jpg';
const Banner = () => {
    return (
        <div className='mx-4 md:mx-12 mt-24'>
            <div div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4' >
                <div className=''>
                    <h1 className='text-5xl md:text-6xl font-bold'>SPORTS CAR</h1>
                    <h1 className='text-3xl font-bold text-blue-600 mt-2 md:mt-4'>BEST FOR SPEED</h1>
                    <p className='py-4 text-gray-500'>We can simply say sports car is small low car with a high-powered engine and generally seats two people.Lamborgini Huracan is one of them.It's  a famous sports car for many people.Specialy celebrity mostly use this car.</p>
                    <button className='bg-blue-200 text-blue-600 text-xl px-8 py-2 rounded-lg font-semibold '>SEE MORE</button>
                </div>
                <div className=''>
                    <img src={img} alt="" />
                </div>
            </div >
        </div >
    );
};

export default Banner;