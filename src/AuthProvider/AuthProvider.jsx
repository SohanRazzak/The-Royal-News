import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../config/firebase.config";

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
        logOut
    }

    if(isLoading){
        return ''
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