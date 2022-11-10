import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img from '../../images/others/login.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';
import Loader from '../../components/Loader/Loader';

const Login = () => {
    const { logIn, providerLogin, githubLogin } = useContext(AuthContext);
    let location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = () => {
        setLoading(true);
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Error::', error);
            })
            .finally(() => setLoading(false));
    }

    const handleGithubLogin = () => {
        setLoading(true);
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Error::', error);
            })
            .finally(() => setLoading(false));
    }

    const handleLogin = event => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                // navigate('/');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Error::', error);
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     logIn(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //         })
    //         .catch(err => console.error(err))
    // }
    return (
        <div className="hero w-full bg-base-200">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mx-auto">
                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    {
                        loading ? <Loader></Loader> : <><h1 className="text-5xl font-bold mx-auto">Login now!</h1>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                    <p className='text-red-500'>{error}</p>
                                    {
                                        success && <p className='text-success'>User successfully added</p>
                                    }
                                    <br />


                                    <div className="text-center">
                                        <p>
                                            New user?  <Link to="/signup" className="label-text-alt link link-hover text-orange-400">Register first..</Link>
                                        </p>

                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            <div className='text-center text-xl'>
                                <p className='text-orange-600 text-center'>Another options to login</p>
                                <p className='text-center mt-2 mb-5'>
                                    <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mx-3  text-green-600">
                                        <FaGoogle className='h-8 w-12'></FaGoogle>
                                    </button>

                                    <button onClick={handleGithubLogin} className="btn btn-circle btn-outline text-green-600">
                                        <FaGithub className='h-8 w-12'></FaGithub>
                                    </button>
                                </p>
                            </div></>

                    }


                </div>
            </div>
        </div>
    );
};

export default Login;