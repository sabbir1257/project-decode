import React from 'react';
import Banner from '../../Components/Home/Banner';
import Service from '../../Components/Home/Service';
import OurGreatWork from '../../Components/Home/OurGreatWork';
import YourIdeaIntoReality from '../../Components/Home/YourIdeaIntoReality';
import InterestedToWork from '../../Components/Home/InterestedToWork';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <OurGreatWork/>
            <YourIdeaIntoReality/>
            <InterestedToWork/>
        </div>
    );
};

export default Home;