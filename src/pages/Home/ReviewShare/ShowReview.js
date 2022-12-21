import React from 'react';
import { FaLeaf } from "react-icons/fa";

const ShowReview = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div className="divider my-3"></div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-orange-400 sm:text-4xl md:mx-auto">
                    What our users, have to say
                </h2>
                <p className="text-base text-info md:text-lg">
                    All user reviews are showing bellow. Explore us and <br /> join
                    with us if you find any comfortable.
                </p>
            </div>


            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

                <div className="p-5 duration-300 transform bg-slate-50 border rounded shadow-sm hover:-translate-y-2">
                    <div
                        className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50"
                        style={{ color: "#F7782A" }}
                    >
                        <FaLeaf />
                    </div>
                    <h6 className="mb-2 font-semibold text-black leading-5">The doctor said</h6>
                    <p className="text-sm text-gray-900">
                        Coming into the office, it is clean, bright, and nicely appointed. The staff is professional and greeted you right away.
                    </p>
                    <div className="flex items-center mt-5">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Shruti Parmar
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 duration-300 transform bg-black text-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center mb-5">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Shruti Parmar
                            </a>
                            <p className="text-sm font-medium leading-4 ">Author</p>
                        </div>
                    </div>

                    <h6 className="mb-2 font-semibold leading-5">That is the true</h6>
                    <p className="text-sm ">
                        What a nice new facility! Dr. Brijesh is expertise in dental, I had done my 3M lava crown treatment from him and it was awesome. His work is too clean perfect and never painful.
                    </p>
                </div>

                <div className="p-5 duration-300 transform bg-slate-50 border rounded shadow-sm hover:-translate-y-2">
                    <div
                        className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50"
                        style={{ color: "#F7782A" }}
                    >
                        <FaLeaf />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-black">Anshul Kumar said</h6>
                    <p className="text-sm text-gray-900">
                        The clinic is very clean and warm very unlike a regular dental clinic. The initial consultation made me comfortable and I decided to go ahead with the required treatment.
                    </p>
                    <div className="flex items-center mt-5">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Shruti Parmar
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 duration-300 transform bg-black text-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center mb-5">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Jaimin Patel
                            </a>
                            <p className="text-sm font-medium leading-4 ">Author</p>
                        </div>
                    </div>

                    <h6 className="mb-2 font-semibold leading-5">That is the true</h6>
                    <p className="text-sm ">
                        He is extremely competent, meticulous, and skilled in dentistry and patient care. Over the years, I have had fillings, crowns and cleanings. All done without problems or stress.
                    </p>
                </div>

                <div className="p-5 duration-300 transform bg-slate-50 border rounded shadow-sm hover:-translate-y-2">
                    <div
                        className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50"
                        style={{ color: "#F7782A" }}
                    >
                        <FaLeaf />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-black">Aryan Forever said</h6>
                    <p className="text-sm text-gray-900">
                        For successful treatment, advanced clean and comfortable facilities,smart and well -trained staff, Personal Dental Care would be the best choice.
                    </p>
                    <div className="flex items-center mt-5">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Shruti Parmar
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 duration-300 transform bg-black text-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center mb-5">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Richa Vasant
                            </a>
                            <p className="text-sm font-medium leading-4 ">Author</p>
                        </div>
                    </div>

                    <h6 className="mb-2 font-semibold leading-5">That is the true</h6>
                    <p className="text-sm ">
                        I recommend this dental place to everyone in need of any dental procedure Personal Dental Care delivers a level of care and expertise that seldom coexists. Going to a dentist may be frustrating but he make you comfortable.
                    </p>
                </div>

            </div>
            <div className="divider">*</div>
        </div>
    );
};

export default ShowReview;