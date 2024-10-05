// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    /*const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }*/
    
    const users = useLoaderData();

    return (
        <div>
            <h1>Users</h1>
            <ol>
                {users.map(user => (
                    <li key={user.id}> <Link to={`/users/${user.id}`}> {user.name} </Link></li>
                ))}
            </ol>
        </div>
    );
}

export default Users;
