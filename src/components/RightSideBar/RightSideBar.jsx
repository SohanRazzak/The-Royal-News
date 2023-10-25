import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
    const { socialLogin } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const handleSocialLogin= (provider)=>{
        socialLogin(provider)
        .then(() => {
            toast("Login Successfull!")
            location.state ? moveTo(location.state) : moveTo("/");
        })
        .catch(err => toast(err.code.replace(/[-]/g, " ").replace('auth/','').toUpperCase()))
    }

    return (
        <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2">
            <span className="h-5 w-2 bg-rose-700 block"></span>  Login With
            </h3>
            <div className="mx-auto mb-5">
            <div className="flex gap-3 md:flex-col px-3 justify-center items-center">
                    <button onClick={()=>handleSocialLogin(GoogleProvider)} className="px-4 py-2 rounded-lg border-teal-600 border-2 text-xl font-semibold hover:text-white hover:bg-teal-500 w-full text-teal-600 flex items-center gap-3 justify-center"> <FaGoogle/> Google</button>
                    <button onClick={()=>handleSocialLogin(GithubProvider)} className="px-4 py-2 rounded-lg border-fuchsia-600 border-2 text-xl font-semibold hover:text-white hover:bg-fuchsia-500 w-full text-fuchsia-600 flex items-center gap-3 justify-center"> <FaGithub/> Github</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
