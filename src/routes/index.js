import { createBrowserRouter } from "react-router-dom";
import ToDoList from "../components/toDo/ToDoList";
import My from "../components/My";
import App from "../App";
import Counters from "../components/counters/Counters";
import Registration from "../components/registration/Registration";
import Login from "../components/login/Login";

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

        ]
    },

]);

export default router;