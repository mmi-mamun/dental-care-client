import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ServiceDetailsPage from "../../pages/ServiceDetailsPage/ServiceDetailsPage";
import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>
            }
        ]
    }
])

export default router;