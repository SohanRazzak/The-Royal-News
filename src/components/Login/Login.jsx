import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const location = useLocation();
    const moveTo = useNavigate();
    const { logIn, socialLogin } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        logIn(email, password)
            .then(() => {
                toast("Login Successfull!");
                location.state ? moveTo(location.state) : moveTo("/");
            })
            .catch((err) =>
                toast(
                    err.code
                        .replace(/[-]/g, " ")
                        .replace("auth/", "")
                        .toUpperCase()
                )
            );
    };

    const handleSocialLogin = (provider) => {
        socialLogin(provider)
            .then(() => {
                toast("Login Successfull!");
                location.state ? moveTo(location.state) : moveTo("/");
            })
            .catch((err) =>
                toast(
                    err.code
                        .replace(/[-]/g, " ")
                        .replace("auth/", "")
                        .toUpperCase()
                )
            );
    };

    return (
        <div className="bg-[#F3F3F3] h-screen mb-12">
            <Navbar></Navbar>

            <div className="w-3/4 lg:w-1/3 mx-auto mt-10 bg-white p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center border-b pb-5">
                    Login your account
                </h2>
                <form onSubmit={handleLogin} className="px-6 pt-6 pb-8">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow bg-[#F3F3F3] focus:border-blue-800 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow bg-[#F3F3F3] focus:border-blue-800 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="font-semibold text-lg px-6 py-2 bg-gray-800 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                    <p className="font-semibold mt-4">
                        Dont’t Have An Account ?
                        <Link className="text-rose-500 ml-2" to="/create-user">
                            Register
                        </Link>
                    </p>
                </form>
                <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center items-center px-7">
                    <button
                        onClick={() => handleSocialLogin(GoogleProvider)}
                        className="px-4 py-2 rounded-lg border-teal-600 border-2 text-xl font-semibold hover:text-white hover:bg-teal-500 w-full text-teal-600 flex items-center gap-3 justify-center">
                        <FaGoogle /> Google
                    </button>
                    <button
                        onClick={() => handleSocialLogin(GithubProvider)}
                        className="px-4 py-2 rounded-lg border-fuchsia-600 border-2 text-xl font-semibold hover:text-white hover:bg-fuchsia-500 w-full text-fuchsia-600 flex items-center gap-3 justify-center">
                        <FaGithub /> Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
