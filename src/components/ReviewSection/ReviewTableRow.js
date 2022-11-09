import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewTableRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { user } = useContext(AuthContext);
    const { _id, serviceName, UserName, email, comment, status } = review;



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-10 h-10">
                            <img className='rounded-lg' src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{UserName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                {/* <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td>{comment.slice(0, 50)}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">
                    {
                        status ? status : 'Pending review'
                    }
                </button>
            </th>
        </tr>
    );
};

export default ReviewTableRow;