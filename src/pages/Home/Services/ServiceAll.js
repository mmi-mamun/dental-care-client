import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const ServiceAll = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useTitle('Services');
    useEffect(() => {
        fetch('https://personal-dental-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // if (loading) {
    //     return <div>

    //     </div>
    // }
    return (
        <div className='my-5'>
            <div className="text-center my-5">
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Services Area</h2>
            </div>
            {
                services?.length === 0 ? <Loader /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        services.map(service => <ServiceCard service={service} key={service.service_id}></ServiceCard>)
                    }

                </div>
            }

        </div>
    );
};

export default ServiceAll;