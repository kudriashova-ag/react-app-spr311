import { createBrowserRouter } from "react-router-dom";
import ToDoList from "../components/toDo/ToDoList";
import My from "../components/My";
import App from "../App";

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
            }
        ]
    },

]);

export default router;