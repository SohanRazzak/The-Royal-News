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
    const [news, setNews] = useState([])
    const mostViewed = [...news].sort((a,b) => b.total_view - a.total_view).slice(0,4)
    
    

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
        fetch("/news.json")
        .then(res => res.json())
        .then(data => setNews(data))

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
        logOut,
        news,
        mostViewed
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