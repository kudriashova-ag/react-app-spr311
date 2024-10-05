import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
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
