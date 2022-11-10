import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About/About';
import AdvicePage from './AdvicePage/AdvicePage';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home');
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