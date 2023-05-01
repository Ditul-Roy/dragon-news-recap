import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import NewsLayOut from "../Layout/NewsLayOut";
import LoginLayOut from "../Layout/LoginLayOut";
import Login from "../Shared/Login/Login/Login";
import SignUp from "../Shared/Login/SignUp/SignUp";
import PrivetRooute from "./PrivetRooute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayOut></LoginLayOut>,
        children: [
            {
                path: '/',
                element: <Navigate to="/categorynews/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "categorynews",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://the-news-server-recap.vercel.app/catagories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <PrivetRooute><NewsLayOut></NewsLayOut></PrivetRooute>,
        children: [
            {
                path: ':id',
                element: <NewsDetails></NewsDetails>,
                loader: ({params}) => fetch(`https://the-news-server-recap.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;