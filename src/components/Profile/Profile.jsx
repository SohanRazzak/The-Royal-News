import { useContext } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
    const { loggedUser } = useContext(AuthContext);
    return (
        <div>
            <Header />
            <Navbar />
            <div className="bg-gray-100 h-screen p-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <div className="text-center">
                        <img
                            src={loggedUser.photoURL}
                            alt={loggedUser.displayName}
                            className="w-32 h-32 rounded-full mx-auto"
                        />
                        <h2 className="text-2xl font-semibold mt-4">
                            {loggedUser.displayName}
                        </h2>
                        <p className="text-gray-600">
                            {loggedUser.email ||
                                "Logged In Using Social Account"}
                        </p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Bio</h3>
                        <p className="text-gray-700">
                            {loggedUser?.bio || "No bio available."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
