import React from 'react';
import img from '../../images/person/me-.png';
const About = () => {
    return (
        <div className='w-50 mx-auto shadow-lg p-5 mt-5'>
            <div className='w-50 mx-auto'>
                <img className='rounded-pill w-100' src={img} alt="" />
            </div>
            <div>
                <h3 className='text-center'>Abdur Rahim</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam, ad quisquam reiciendis ipsam, aperiam esse, maxime distinctio aliquid iste laboriosam quasi placeat animi accusamus ex possimus unde tempore asperiores!</p>
            </div>
        </div>
    );
};

export default About;