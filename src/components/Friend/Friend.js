import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, phone, username, email } = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <h4>Phone: {phone}</h4>
            <p><small>Email: {email}</small></p>
            <p>UserName: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;