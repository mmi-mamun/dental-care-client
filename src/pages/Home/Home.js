import React from 'react';
import About from './About/About';
import AdvicePage from './AdvicePage/AdvicePage';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AdvicePage></AdvicePage>
            <About></About>
            {/* https://www.nhs.uk/live-well/healthy-teeth-and-gums/take-care-of-your-teeth-and-gums/ */}
        </div>
    );
};

export default Home;