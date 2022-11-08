import React from 'react';


const About = () => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

            {/* Personal profile  */}
            <div className="drawer grid-cols-1">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-auto">
                    <label htmlFor="my-drawer" className="btn btn-primary bg-black drawer-button text-white my-12 font-bold">Doctor's Profile</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><h1 className="text-5xl font-bold text-orange-700 mb-2">M MI Musafir</h1></li>
                        <li><h3 className="text-2xl">
                            BDS(DDC), FCPS(Orthodontics)
                        </h3></li>
                        <li> <p>Special Training on Dental Implant
                            <br />
                            Asst. Prof. Dept. of Orthodontics Consultant (Orthodontics)</p></li>
                    </ul>
                </div>
            </div>


            {/* Contact information  */}
            <div className="drawer drawer-end grid-cols-1">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-auto">

                    <label htmlFor="my-drawer-4" className="btn btn-primary bg-black drawer-button text-white my-12 font-bold">Contact Info.</label>
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><p className="pt-2 font-semibold">Chamber: <br /> Personal Dental Care </p></li>
                        <li><p className="pb-6 pt-1">
                            House#6, Road#4, Dhanmondi <br /> Dhaka-1205
                            <br /> <br />
                            Consulting Hours: <br />
                            11:30 AM  ~  04:30 PM
                            <br /> <br />
                            Hotline: 10606
                        </p></li>
                    </ul>

                </div>
            </div>

        </div>


    );
};

export default About;