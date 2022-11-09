import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewTableRow from '../../components/ReviewSection/ReviewTableRow';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';


const ServiceDetailsPage = () => {
    const { serviceName, price, img, description, _id, rating } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://personal-dental-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const email = user?.email || 'unregistered';

        const userReview = {
            serviceName,
            price,
            UserName: user?.displayName,
            email,
            comment
        }

        fetch('https://personal-dental-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your review is taken successfully..');
                    form.reset();
                }
            }

            )
            .catch(err => console.error(err))
    }
    return (
        <div>
            {/* About service  */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-center">{serviceName}</h1>
                        <p className='p-5 text-xl text-yellow-600 text-center'>Service ID: {_id}</p>
                        <p className='flex justify-around my-5 text-xl text-orange-600 font-semibold'>
                            <span className='px-5'>Fee: {price} Taka</span>
                            <span className='px-5 flex items-center'>Rating: {rating} <FaStar className='mx-2'></FaStar></span>
                        </p>
                        <p className="py-6 text-justify">{description}</p>
                    </div>
                </div>
            </div>


            {/* Get review form  */}
            <form onSubmit={handleReview}>
                <div className="form-control">
                    <label className="label mx-3">
                        <span className="label-text">Share your opinion about this service...</span>
                        <span className="label-text-alt">Review</span>
                    </label>
                    <textarea name='comment' className="textarea textarea-bordered h-24" placeholder="Write here.." ></textarea>
                </div>
                <div className='text-end mr-3'>
                    <input className="btn btn-wide my-3 bg-orange-600" type="submit" value="SUBMIT" />
                </div>
            </form>

            {/* All Reviews data  */}
            <div className="overflow-x-auto w-full mt-12">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-orange-600'>User</th>
                            <th className='text-orange-600'>Service Name</th>
                            <th className='text-orange-600'>Review Message</th>
                            <th className='text-start text-orange-600'>Update Review</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            reviews?.map(review =>
                                <ReviewTableRow
                                    review={review}
                                    // handleDelete={handleDelete}
                                    // handleStatusUpdate={handleStatusUpdate}
                                    key={review._id}></ReviewTableRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;