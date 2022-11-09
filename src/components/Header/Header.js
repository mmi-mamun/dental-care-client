import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../images/logo/logo.jpg'
import unregisteredUser from '../../images/others/unregisteredUser.png'

const Header = () => {
    const { user, singOut } = useContext(AuthContext);
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
                <> <li className='font-semibold text-white'><Link to='/reviews'>My Reviews</Link></li>
                    <li><button onClick={handleLogOut} className="btn btn-ghost rounded-xl text-red-300">Log out</button></li>
                </> :
                <li className='font-semibold text-white'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100" data-theme="business">
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