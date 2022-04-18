import React from 'react';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contract></Contract>
        </div>
    );
};

export default Home;