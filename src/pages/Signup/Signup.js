import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import imgSignUp from '../../images/others/signup.jpg';

const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    let location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        /********************** Password validation start *************************/

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase letter');
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setPasswordError('Please provide at least two digit');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one special character');
            return;
        }
        if (password.length < 8) {
            setPasswordError('Password should be at least 8 characters');
            return;
        }
        setPasswordError('Good Job');
        /********************** Password validation end *************************/

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('Error::', error);
                setPasswordError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full bg-base-200">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mx-auto">
                    <img className='rounded-lg' src={imgSignUp} alt="" />
                </div>
                <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <h1 className="text-5xl font-bold mx-auto">SIGN UP</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" className="input input-bordered font-bold italic" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Give your Photo URL" className="input input-bordered font-bold italic" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="Enter your mail" className="input input-bordered font-bold italic" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Enter given password" className="input input-bordered font-bold italic" required />

                            <p className='text-red-500'>{passwordError}</p>
                            {
                                success && <p className='text-success'>User successfully added</p>
                            }
                            <br />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover text-secondary">Already registered? Click to Login..</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;