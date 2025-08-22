import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import FormLayout from "../layouts/FormLayout"
import ReportForm from "../pages/ReportForm"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FormLayout />,
        children: [
            { path: "/", element: <Login /> },
            { path: "/nova-reclamacao", element: <ReportForm /> },
        ],
    },
])
