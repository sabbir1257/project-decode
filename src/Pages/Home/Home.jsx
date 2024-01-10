import React from 'react';
import Banner from '../../Components/Home/Banner';
import Service from '../../Components/Home/Service';
import OurGreatWork from '../../Components/Home/OurGreatWork';
import YourIdeaIntoReality from '../../Components/Home/YourIdeaIntoReality';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <OurGreatWork/>
            <YourIdeaIntoReality/>
        </div>
    );
};

export default Home;