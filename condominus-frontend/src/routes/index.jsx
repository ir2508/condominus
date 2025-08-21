import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import FormLayout from "../layouts/FormLayout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FormLayout />,
        children: [
            { path: "/", element: <Login /> },
        ],
    },
])
