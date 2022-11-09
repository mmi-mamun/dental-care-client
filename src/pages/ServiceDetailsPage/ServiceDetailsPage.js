import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewTableRow from '../../components/ReviewSection/ReviewTableRow';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetailsPage = () => {
    const { serviceName, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
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

        fetch('http://localhost:5000/reviews', {
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
            <h1>{serviceName}</h1>
            <form onSubmit={handleReview}>
                <div className="form-control">
                    <label className="label mx-3">
                        <span className="label-text">Share your opinion...</span>
                        <span className="label-text-alt">Review</span>
                    </label>
                    <textarea name='comment' className="textarea textarea-bordered h-24" placeholder="Write here.." ></textarea>
                </div>
                <input className="btn btn-wide my-3 bg-orange-600" type="submit" value="SUBMIT" />
            </form>

            <div className="overflow-x-auto w-full">

                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
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