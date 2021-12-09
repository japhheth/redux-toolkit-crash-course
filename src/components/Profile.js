import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(({ user }) => user.value);
    const theme = useSelector(({ theme }) => theme.value);

    return (
        <div style={{ color: theme }}>
            <h1>Profile</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}

export default Profile
