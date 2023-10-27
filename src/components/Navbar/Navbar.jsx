import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { loggedUser, logOut } = useContext(AuthContext);
    const navlink = (
        <>
            <Link
                to="/"
                className="block hover:text-blue-600 hover:bg-white pl-3 py-2 rounded-md md:flex font-semibold text-lg"
            >
                Home
            </Link>
            <Link
                to="/about"
                className="block hover:text-blue-600 hover:bg-white pl-3 py-2 rounded-md md:flex font-semibold text-lg"
            >
                About
            </Link>
            <Link
                to="/career"
                className="block hover:text-blue-600 hover:bg-white pl-3 py-2 rounded-md md:flex font-semibold text-lg"
            >
                Career
            </Link>
            {
                loggedUser && <Link
                to="/profile"
                className="block hover:text-blue-600 hover:bg-white pl-3 py-2 rounded-md md:flex font-semibold text-lg"
            >
                Profile
            </Link>
            }
            {
                !loggedUser && <Link
                to="/create-user"
                className="block hover:text-blue-600 hover:bg-white pl-3 py-2 md:flex font-semibold text-lg"
            >
                Register
            </Link>
            }
        </>
    );

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        logOut()
            .then(() => toast("Logged Out!"))
            .catch((err) => toast(err.code));
    };

    return (
        <nav className="px-4 py-2 sticky top-0 z-10 bg-white">
            <div className="flex md:justify-between md:items-center">
                <div className="flex  items-center md:justify-center flex-1">
                    {/* Hamburger icon for mobile */}
                    <div className="md:hidden">
                        <button
                            className="text-white hover:text-gray-300 p-2 border-gray-500 border-2 bg-gray-200 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            <FaBars className="text-gray-800 text-2xl" />
                        </button>
                    </div>
                    <div className="hidden md:flex gap-6 justify-center">
                        {/* Links for PC version */}
                        {navlink}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {loggedUser ? (
                        <>
                            {loggedUser.photoURL ? (
                                <Link to='/profile'>
                                    <img
                                    className="w-11 h-11 rounded-full"
                                    src={loggedUser?.photoURL}
                                    alt={loggedUser.displayName}
                                />
                                </Link>
                            ): null}
                            <button
                                onClick={handleLogout}
                                className="font-semibold text-lg px-6 py-2 bg-gray-800 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:shadow-outline"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="font-semibold text-lg px-6 py-2 bg-gray-800 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute md:hidden mt-2 ml-3 p-5 bg-gray-200 w-[320px] rounded-lg py-2 shadow-lg">
                    {navlink}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
