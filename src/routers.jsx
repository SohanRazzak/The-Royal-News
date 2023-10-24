import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import CreateUser from "./components/CreateUser/CreateUser";
import Home from "./components/Home/Home"
import NewsDetails from "./components/NewsDetails/NewsDetails"
import Category from "./components/Category/Category";
import Profile from "./components/Profile/Profile";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/create-user",
                element: <CreateUser></CreateUser>,
            },
            {
                path: "/news/:newsLink",
                element: <NewsDetails></NewsDetails>
            },
            {
                path: "/category/:catID",
                element: <Category></Category>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ],
    },
]);

export default routers;
