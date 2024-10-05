import { createBrowserRouter } from "react-router-dom";
import ToDoList from "../components/toDo/ToDoList";
import My from "../components/My";
import App from "../App";
import Counters from "../components/counters/Counters";
import Registration from "../components/registration/Registration";
import Login from "../components/login/Login";
import Users from "../components/users/Users";
import { getUser, getUsers } from "../loaders/Users";
import User from "../components/users/User";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
            },
            {
                path: '/todos',
                element: <ToDoList />
            },
            {
                path: '/my',
                element: <My />
            },
            {
                path: '/counters',
                element: <Counters />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: "/users",
                loader: getUsers,
                element: <Users />
            },
            {
                path: "/users/:id",
                loader: getUser,
                element: <User />
            }
        ]
    },

]);

export default router;