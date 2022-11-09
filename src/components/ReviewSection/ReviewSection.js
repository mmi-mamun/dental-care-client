import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewTableRow from './ReviewTableRow';

const ReviewSection = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // const url = `https://personal-dental-server.vercel.app/reviews?email=${user.email}`

    useEffect(() => {
        fetch(`https://personal-dental-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete your comment?');
        if (proceed) {
            fetch(`https://personal-dental-server.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== _id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = _id => {
        fetch(`https://personal-dental-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(urv => urv._id !== _id);
                    const approving = reviews.find(urv => urv._id === _id);
                    approving.status = 'Approved';
                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }


    return (
        <div className='mx-auto'>
            {
                reviews?.length === 0 ?
                    <div className='mx-auto my-12'><h1 className="text-5xl text-orange-600 mx-5 text-center">NO REVIEWS WERE ADDED</h1></div> :
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
                                            handleDelete={handleDelete}
                                            handleStatusUpdate={handleStatusUpdate}
                                            key={review._id}></ReviewTableRow>)
                                }

                            </tbody>


                        </table>
                    </div>
            }

        </div>
    );
};

export default ReviewSection;