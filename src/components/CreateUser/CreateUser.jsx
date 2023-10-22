import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";


const CreateUser = () => {
    const color = ["teal", "orange", "slateblue", "tomato"];
    const bgColor = color[Math.floor(Math.random() * 4)];
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const moveTo = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const userName = form.get("username");
        const photoURL = form.get("photo");
        const defaultPhotoURL = `https://placehold.co/400x400/${bgColor}/white?text=${userName[0]}`;
        createUser(email, password)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: userName,
                    photoURL: photoURL || defaultPhotoURL
                })
                .then(() => {
                    toast("User Created Successfully!")
                    location.state ? moveTo(location.state) : moveTo("/");
            })
            })
            .catch((err) => toast(err.code.replace(/[-/]/g, " ")));
    };

    return (
        <div className="bg-[#F3F3F3] h-screen mb-12">
            <Navbar></Navbar>

            <div className="w-3/4 lg:w-1/3 mx-auto mt-10 bg-white p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center border-b pb-5">
                    Create a new account
                </h2>
                <form onSubmit={handleCreateUser} className="px-6 pt-6 pb-8">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Your Name
                        </label>
                        <input
                            className="shadow bg-[#F3F3F3] focus:border-blue-800 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="photo"
                        >
                            Photo URL (optional)
                        </label>
                        <input
                            className="shadow bg-[#F3F3F3] focus:border-blue-800 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="photo"
                            id="photo"
                            name="photo"
                            placeholder="Enter Your Avatar URL (Optional)"
                        />
                    </div>
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
                            Create User
                        </button>
                    </div>
                    <p className="font-semibold mt-4">
                        Already Have An Account ?{" "}
                        <Link className="text-rose-500" to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
