import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import DefaultLayout from "../layouts/DefaultLayout"
import ReportForm from "../pages/ReportForm"
import ShowReports from "../pages/ShowReports"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <Login /> },
            { path: "/nova-reclamacao", element: <ReportForm /> },
        ],
    },
    {
        path: "/admin",
        element: <DefaultLayout />,
        children: [
            // { path: "/", element: <Login /> },
            { path: "denuncias", element: <ShowReports /> },
        ],
    },
])
