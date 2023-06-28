import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h2>This is Friend Details.</h2>
            <h3>Name: {friend.name}</h3>
            <p>phone : {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;