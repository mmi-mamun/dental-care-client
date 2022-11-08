import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import imgSignUp from '../../images/others/signup.jpg';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
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
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="Enter a new password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign up" />
                        </div>

                        <p className='text-center my-3'>Already have an account?.. <Link to='/login' className='text-orange-600'>Please Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;