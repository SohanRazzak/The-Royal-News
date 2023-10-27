import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import QZone from "../QZone/QZone";

const RightSideBar = () => {
    const { socialLogin } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

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
        <div className="max-w[280px] mx-auto">
            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2">
                <span className="h-5 w-2 bg-rose-700 block"></span> Login With
            </h3>
            <div className="mx-auto mb-5">
                <div className="flex gap-3 md:flex-col px-3 justify-center items-center">
                    <button
                        onClick={() => handleSocialLogin(GoogleProvider)}
                        className="px-4 py-2 rounded-lg border-teal-600 border-2 text-xl font-semibold hover:text-white hover:bg-teal-500 w-full text-teal-600 flex items-center gap-3 justify-center"
                    >
                        {" "}
                        <FaGoogle /> Google
                    </button>
                    <button
                        onClick={() => handleSocialLogin(GithubProvider)}
                        className="px-4 py-2 rounded-lg border-fuchsia-600 border-2 text-xl font-semibold hover:text-white hover:bg-fuchsia-500 w-full text-fuchsia-600 flex items-center gap-3 justify-center"
                    >
                        {" "}
                        <FaGithub /> Github
                    </button>
                </div>
            </div>

            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2">
                <span className="h-5 w-2 bg-rose-700 block"></span> Find Us On
            </h3>
            <div className="border-2 border-collapse rounded-lg font-medium text-gray-600 mx-2">
                <div className="border-b-2 p-4 flex items-center gap-2 ">
                    <span className="bg-gray-200 p-2 rounded-full">
                    <FaFacebookF className="text-indigo-600"/>
                    </span>
                    <Link to="https://fb.com/" className="hover:text-indigo-600">Facebook</Link>
                </div>
                <div className="border-b-2 p-4 flex items-center gap-2 ">
                    <span className="bg-gray-200 p-2 rounded-full">
                    <FaTwitter className="text-blue-500"/>
                    </span>
                    <Link to="https://x.com/" className="hover:text-blue-500">Twitter</Link>
                </div>
                <div className="p-4 flex items-center gap-2 ">
                    <span className="bg-gray-200 p-2 rounded-full">
                        <FaInstagram className="text-pink-500"/>
                    </span>
                    <Link to="https://instagram.com/" className="hover:text-pink-500">Instagram</Link>
                </div>
            </div>
            <div className="my-5 mx-2">
            <QZone/>
            </div>
        </div>
    );
};

export default RightSideBar;
