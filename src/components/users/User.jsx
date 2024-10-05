import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const User = () => {
  /*const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    setUser(response.data);
  };*/

  const user = useLoaderData();
  return (
    <div>
      <h1>User {user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default User;
