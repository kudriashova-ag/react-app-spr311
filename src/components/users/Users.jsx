import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

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
