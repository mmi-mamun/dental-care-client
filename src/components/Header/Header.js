import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import logo from '../../images/logo/logo.jpg'
import unregisteredUser from '../../images/others/unregisteredUser.png'

const Header = () => {
    const { user, singOut } = useContext(AuthContext);
    useTitle('Add service');
    const [services, setServices] = useState({ rating: "4.5", img: "https://img.dentaleconomics.com/files/base/ebm/de/image/2021/07/16x9/dental_patient.60f8947953ef0.png?auto=format,compress&w=500&h=281&fit=clip" });

    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [allService])

    const handleLogOut = () => {
        singOut()
            .then()
            .catch()
    }
    const menuItems = <>
        <li className='font-semibold text-white'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-white'><Link to='/services'>Services</Link></li>
        <li className='font-semibold text-white'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-semibold text-white'><Link to='/reviews'>My Reviews</Link></li>
                    <a href="#my-modal-2" className="btn btn-ghost">Add Service</a>
                    <li><button onClick={handleLogOut} className="btn btn-ghost rounded-xl text-red-300">Log out</button></li>
                </> :
                <li className='font-semibold text-white'><Link to='/login'>Login</Link></li>
        }
    </>


    const handleSubmit = event => {
        event.preventDefault();

        console.log(services);

        fetch('https://personal-dental-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('Service added successfully');
                    event.target.reset();
                }
            })

    }

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newService = { ...services, service_id: allService?.length + 1 };
        // console.log(newUser);

        newService[field] = value;
        setServices(newService);

    }
    return (
        <div className="navbar bg-base-100" data-theme="business">
            <div>
                <div className="modal w-full" id="my-modal-2">
                    <div className="modal-box">
                        <div>
                            <h2 className='text-xl text-center text-orange-600 font-semibold'>You can add service if you want..</h2>
                            <form className='text-center' onSubmit={handleSubmit}>
                                <input onBlur={handleOnBlur} type="text" name="serviceName" id="" placeholder='Name of service' className="input input-bordered input-primary w-full max-w-xs my-3 rounded-lg" required />

                                <input onBlur={handleOnBlur} type="number" name="price" id="" placeholder='Service fee' className="input input-bordered input-primary w-full max-w-xs my-3 rounded-lg" required />

                                <input onBlur={handleOnBlur} type="text" name="description" id="" placeholder='Write short description' className="input input-bordered input-primary w-full max-w-xs my-3 rounded-lg" required />
                                <br />
                                <button type="submit" className='btn glass rounded-lg text-white'>Add Service</button>
                            </form>
                        </div>
                        <div className="modal-action">
                            <a href="/#" className="btn">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    {/* When collops */}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                {/* nav logo */}
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='rounded-lg h-2/3' src={logo} alt="" />
                </Link>
                <h3 className="lg:text-2xl mx-3 font-semibold text-white">Personal Dental Care</h3>

            </div>

            {/* In full screen */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <p>{user?.displayName}</p>
                {
                    user?.uid ? <img className='h-12 w-12 rounded-full mx-5' title={user?.displayName} src={user?.photoURL} alt="" /> : <img className='h-12 w-12 rounded-full mx-5' title={'Unregistered user'} src={unregisteredUser} alt="" />
                }

                {/* <button className="btn btn-ghost rounded-xl text-red-300">Log out</button> */}
            </div>
        </div>
    );
};

export default Header;