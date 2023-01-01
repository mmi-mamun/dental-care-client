import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner/banner-01.jpg'
import banner2 from '../../../images/banner/banner-02.jpg'
import banner3 from '../../../images/banner/banner-03.jpg'
import banner4 from '../../../images/banner/banner-04.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full my-3">
                <div id="item1" className="carousel-item relative w-full">
                    <div className="img-gradient-right w-full  rounded-xl">
                        <img src={banner1} className="w-full rounded-xl" alt="" />
                    </div>
                    {/* <div className='absolute text-end transform -translate-y-1/2 left-5 right-5 md:top-1/3 lg:top-1/4 top-2/4'>
                        <h1 className='lg:text-5xl md:text-xl text-sm font-semibold my-5'> Expert surgical care <br />  you know and trust</h1>
                        <h2 className='hidden lg:block md:block lg:text-2xl md:text-xs font-semibold text-xs'>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> The goal is to prevent complications</h2>
                    </div> */}
                </div>


                <div id="item2" className="carousel-item relative w-full">
                    <div className="img-gradient-left w-full  rounded-xl">
                        <img src={banner3} className="w-full rounded-xl" alt='' />

                    </div>
                    {/* <div className='absolute text-start transform -translate-y-1/2 left-5 top-2/4'>
                        <h1 className='lg:text-5xl font-semibold my-5'> Expert surgical care <br />  you know and trust</h1>
                        <h2 className='lg:text-2xl font-semibold'>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> The goal is to prevent complications</h2>
                    </div> */}
                </div>

                <div id="item3" className="carousel-item relative w-full">
                    <div className="img-gradient-bottom w-full  rounded-xl">
                        <img src={banner2} className="w-full rounded-xl" alt="" />
                    </div>
                    {/* <div className='absolute text-center transform -translate-y-1/2 left-1/4 top-3/4'>
                        <h1 className='lg:text-5xl font-semibold my-5'> Expert surgical care <br />  you know and trust</h1>
                        <h2 className='lg:text-2xl font-semibold'>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> The goal is to prevent complications</h2>
                    </div> */}
                </div>

                <div id="item4" className="carousel-item relative w-full">
                    <div className="img-gradient-right w-full">
                        <img src={banner4} className="w-full rounded-xl" alt='' />
                    </div>
                    {/* <div className='absolute text-end transform -translate-y-1/2 right-12 top-1/4'>
                        <h1 className='lg:text-5xl font-semibold my-5'> Expert surgical care <br />  you know and trust</h1>
                        <h2 className='lg:text-2xl font-semibold'>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> The goal is to prevent complications</h2>
                    </div> */}
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;