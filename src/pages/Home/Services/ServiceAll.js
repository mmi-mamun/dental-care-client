import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    if (loading) {
        return <div>
            <svg className='animate-spin' data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,7a1,1,0,1,0,1,1A1,1,0,0,0,12,7ZM6.30383,16.134a1,1,0,1,0,1.366.366A1,1,0,0,0,6.30383,16.134Zm11.39234,0a1,1,0,1,0,.366,1.366A.99992.99992,0,0,0,17.69617,16.134Zm2.91418-2.7912v-.00048a4.91843,4.91843,0,0,0-4.52588-1.19678L15.665,11.3833a4.98871,4.98871,0,0,0-2.50342-8.25146,5.03485,5.03485,0,0,0-4.27832.958A4.97824,4.97824,0,0,0,7,8a4.92853,4.92853,0,0,0,1.35156,3.3916l-.41845.75a4.9889,4.9889,0,0,0-5.92627,6.28613,5.02991,5.02991,0,0,0,2.96972,3.22608,4.96944,4.96944,0,0,0,6.58887-3.18994l.8667.01416a4.98119,4.98119,0,0,0,4.76025,3.52441,5.01726,5.01726,0,0,0,4.79981-3.57373A4.95006,4.95006,0,0,0,20.61035,13.34277Zm-.52881,4.49512a3.0059,3.0059,0,0,1-4.38574,1.75977,2.96456,2.96456,0,0,1-1.35156-1.70508,1.99436,1.99436,0,0,0-1.90967-1.42871h-.86914a1.99451,1.99451,0,0,0-1.90967,1.42822A2.98084,2.98084,0,0,1,5.70654,19.792a2.99293,2.99293,0,0,1,1.76709-5.7041,1.96659,1.96659,0,0,0,2.17383-.94238l.43555-.75342a1.99513,1.99513,0,0,0-.28125-2.36865,2.9795,2.9795,0,0,1,.3291-4.37012A2.99279,2.99279,0,0,1,14.19971,10.022a2.00015,2.00015,0,0,0-.28272,2.37012l.43506.75293a1.97369,1.97369,0,0,0,2.17432.94336,2.98771,2.98771,0,0,1,3.55517,3.74951Z" fill="#6563ff" /></svg>
        </div>
    }
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
        </div>
    );
};

export default ServiceAll;