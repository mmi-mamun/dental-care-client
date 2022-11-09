import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import ServiceAll from "../../pages/Home/Services/ServiceAll";
import Login from "../../pages/Login/Login";
import ServiceDetailsPage from "../../pages/ServiceDetailsPage/ServiceDetailsPage";
import Signup from "../../pages/Signup/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
                path: '/services',
                element: <ServiceAll></ServiceAll>
            }
            ,
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <PrivateRouter><ServiceDetailsPage></ServiceDetailsPage></PrivateRouter>,
                loader: ({ params }) => fetch(`https://personal-dental-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <ReviewSection></ReviewSection>
            }
        ]
    }
])

export default router;