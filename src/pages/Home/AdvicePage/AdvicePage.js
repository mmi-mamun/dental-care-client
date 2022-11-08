import React from 'react';
import doctor from '../../../images/others/doctor.jpg'

const AdvicePage = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img className="mask mask-hexagon-2 w-3/4" src={doctor} alt='' />
                    {/* <img src={teeth} alt='' className="rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={doctor} alt='' className="rounded-lg shadow-2xl absolute w-3/5 top-1/4 right-5 border-8" /> */}
                </div>
                <div className='w-1/2'>
                    <h2 className='text-2xl text-orange-600 font-bold'>Top 10 Pieces of Advice</h2>

                    <h5 className="text-2xl font-bold my-5">Special Training on Dental Implant
                        <br />
                        Asst. Prof. Dept. of Orthodontics Consultant (Orthodontics)</h5>

                    <p className="pt-2 font-bold">Chamber: Labaid Dhanmondi Branch </p>

                    <p className="pb-6 pt-1">
                        House#6, Road#4, Dhanmondi, Dhaka-1205
                        <br />
                        Consulting Hours: 11:30 AM  ~  04:30 PM
                        <br />
                        Hotline: 10606
                    </p>
                    {/* <button className="btn btn-primary">Call Me</button> */}
                </div>
            </div>
        </div>
    );
};

export default AdvicePage;