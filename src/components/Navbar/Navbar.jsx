// import { Link } from "react-router-dom";
// import userIcon from "../../assets/user.png"

// const Navbar = () => {
//     const user = null
//     const navlink = <>
//                     <Link to="/" className="font-semibold text-lg">
//                     Home
//                 </Link>
//                 <Link to="/about" className="font-semibold text-lg">
//                     About
//                 </Link>
//                 <Link to="/career" className="font-semibold text-lg">
//                     Career
//                 </Link>
//     </>
//     return (
//         <nav className="p-4 flex justify-center items-center">
//             <div className="flex justify-center flex-1">
//                 <div className="flex gap-6">
//                 {navlink}
//                 </div>
//             </div>
//                 <img className="w-11 mr-3 rounded-full" src={user?.photoURL || userIcon} alt="User" />
//                 <Link
//                     to="/login"
//                     className="font-semibold text-lg px-6 py-2 bg-gray-800 hover:bg-blue-800 text-white rounded-lg"
//                 >
//                     Login
//                 </Link>
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    const navlink = <>
                <Link to="/" className="block md:flex font-semibold text-lg">
                Home
            </Link>
            <Link to="/about" className="block md:flex font-semibold text-lg">
                About
            </Link>
            <Link to="/career" className="block md:flex font-semibold text-lg">
                Career
            </Link>
</>


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="p-4">
            <div className="flex md:justify-between md:items-center">
                <div className="flex  items-center md:justify-center flex-1">
                    {/* Hamburger icon for mobile */}
                    <div className="md:hidden">
                        <button
                            className="text-white hover:text-gray-300 p-2 border-gray-500 border-2 bg-gray-200 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            <FaBars className="text-gray-800 text-2xl"/>
                        </button>
                    </div>
                    <div className="hidden md:flex gap-6 justify-center">
                        {/* Links for PC version */}
                        {navlink}
                    </div>
                </div>

                <div className="flex items-center">
                    {/* Login button for PC version */}
                    <button className="font-semibold text-lg px-6 py-2 bg-gray-800 hover:bg-blue-800 text-white rounded-lg focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 space-y-2 border p-5 bg-gray-200 max-w-sm rounded-md shadow-lg">
                        {navlink}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
