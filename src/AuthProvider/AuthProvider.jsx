import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../config/firebase.config";
import { HashLoader } from "react-spinners";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [loggedUser, setLoggedUser] = useState(null)
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const socialLogin = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const logOut = ()=> {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user =>{
            user ? setLoggedUser(user) : setLoggedUser(null)
            setIsLoading(false)
        })
        return ()=> unsub()
    },[])

    const contexObject = {
        loggedUser,
        createUser,
        logIn,
        socialLogin,
        logOut
    }

    if(isLoading){
        return (
            <div className="h-screen flex justify-center items-center">
                <HashLoader color="#D72050" size="80px"/>
            </div>
        )
    }
        return (
            <AuthContext.Provider value={contexObject}>
                {children}
            </AuthContext.Provider>
        );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;