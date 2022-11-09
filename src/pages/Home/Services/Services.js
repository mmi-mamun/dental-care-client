import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 3)))
    }, [])
    return (
        <div className='my-5'>
            <div className="text-center my-5">
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Services Area</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    services.map(service => <ServiceCard service={service} key={service.service_id}></ServiceCard>)
                }
            </div>

            <Link to='/services'>
                <button className="btn btn-active btn-accent mx-auto">See more</button>
            </Link>
        </div>
    );
};

export default Services;