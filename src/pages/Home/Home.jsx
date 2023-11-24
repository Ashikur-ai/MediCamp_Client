import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediCamp | Home</title>
            </Helmet>
            <div>
                <img src="https://i.ibb.co/gJHTkkD/1531994615.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;