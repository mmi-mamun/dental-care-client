import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({ service }) => {
    const { _id, serviceName, img, price, description } = service;
    return (
        <PhotoProvider>
            <div className="card w-96 glass mx-auto">
                <PhotoView src={img}>
                    <img src={img} alt="car!" />
                </PhotoView>
                <div className="card-body">
                    <h2 className="card-title font-bold text-center text-3xl">{serviceName}</h2>
                    <p className='text-2xl font-semibold text-center text-orange-600'>Fee: {price} Taka</p>
                    <p className='text-justify'>{description?.slice(0, 100)}...</p>
                    <div className="card-actions justify-center">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary text-xl bg-orange-500 text-black ">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceCard;