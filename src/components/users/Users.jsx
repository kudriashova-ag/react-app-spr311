import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }

    return (
        <div>
            <h1>Users</h1>
            <ol>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </div>
    );
}

export default Users;
