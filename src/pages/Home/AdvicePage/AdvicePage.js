import React from 'react';
import doctor from '../../../images/others/doctor.jpg'
import Lottie from "lottie-react";
import adviceAnimation from '../../../images/lottieJson/advice.json';

const AdvicePage = () => {
    return (
        <div className="hero my-3">
            <div className="hero-content flex justify-center items-center flex-col lg:flex-row md:flex-row">
                <div className='w-1/2 relative'>
                    <Lottie animationData={adviceAnimation} />
                    {/* <img className="mask mask-hexagon-2 w-3/4" src={doctor} alt='' /> */}
                    {/* <img src={teeth} alt='' className="rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={doctor} alt='' className="rounded-lg shadow-2xl absolute w-3/5 top-1/4 right-5 border-8" /> */}
                </div>
                <div className='w-1/2 px-5'>
                    <h2 className='text-2xl text-orange-600 font-bold'>Top 10 Pieces of Advice</h2>
                    <br />
                    <div className="text-start">
                        <li className='mt-2'>Brush Regularly and Properly.</li>
                        <li className='mt-2'>Floss Daily.</li>
                        <li className='mt-2'>Rinse with a Fluoride Mouthwash.</li>
                        <li className='mt-2'>Increase your Calcium Intake.</li>
                        <li className='mt-2'>Cut Out Tobacco.</li>
                        <li className='mt-2'> Limit Coffee Intake.</li>
                        <li className='mt-2'>Limit Carbonated Beverages.</li>
                        <li className='mt-2'>Have a Well-balanced Diet.</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvicePage;