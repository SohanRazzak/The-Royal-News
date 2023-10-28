import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import CreateUser from "./components/CreateUser/CreateUser";
import Home from "./components/Home/Home"
import NewsDetails from "./components/NewsDetails/NewsDetails"
import Category from "./components/Category/Category";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error/>,
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
                element: <PrivateRoute><NewsDetails/></PrivateRoute>
            },
            {
                path: "/category/:catID",
                element: <Category></Category>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: "/about",
                element: <About/>
            }
        ],
    },
]);

export default routers;
