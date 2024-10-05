// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import styles from "./Users.module.css";
import { Col, Row } from "antd";

console.log(styles);

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
  const [search, setSearch] = useSearchParams();
  const [textSearch, setTextSearch] = useState(search.get("q") || "");

  const searchHandler = (e) => {
    setTextSearch(e.target.value);
    setSearch({ q: e.target.value });
  };


  const filterUsers = (user) => {
    return user.name.toLowerCase().includes(textSearch.toLowerCase());
  };
  return (
    <div>
      <h1>Users</h1>
      <Row>
        <Col span={6}>
          <div>
            <input type="text" value={textSearch} onChange={searchHandler} />
          </div>

          <ol className={styles.users}>
            {users.filter(filterUsers).map((user) => (
              <li key={user.id}>
                <NavLink to={`/users/${user.id}`}> {user.name} </NavLink>
              </li>
            ))}
          </ol>
        </Col>

        <Col span={18}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Users;
