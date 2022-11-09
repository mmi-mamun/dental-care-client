import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewSection = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState({});
    // const url = `http://localhost:5000/reviews?email=${user.email}`

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [user?.email])
    return (
        <div>
            <h2>Hi.. your total review {review.length}</h2>
        </div>
    );
};

export default ReviewSection;