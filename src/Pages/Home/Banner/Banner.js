import React from 'react';
import banner from '../../../images/banner/banner.jpg';
// import banner2 from '../../../images/banner/banner2.jpg';
// import banner3 from '../../../images/banner/banner3.jpg';
const Banner = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-12 col-lg-6 my-auto'>
                    <h3>HI,I am Abdur Rahim Mejbha</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos quidem? Enim laborum minima ipsum aspernatur dolorum, maxime quam a molestias architecto sapiente omnis reiciendis aliquid voluptate eum sunt magni.</p>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className='w-100 mx-auto' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;