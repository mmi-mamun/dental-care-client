import React from 'react';


const ServiceCard = ({ service }) => {
    const { serviceName, img, price, description } = service;
    return (
        <div className="card w-96 glass mx-auto">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-center text-3xl">{serviceName}</h2>
                <p className='text-2xl font-semibold text-center text-orange-600'>Fee: {price} Taka</p>
                <p>{description.slice(0, 100) + '...'}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-xl bg-orange-500 text-black ">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;