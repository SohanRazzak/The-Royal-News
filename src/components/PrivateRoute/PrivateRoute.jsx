import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoute = ({children}) => {
    const {loggedUser} = useContext(AuthContext)
    const  location = useLocation()

    if (loggedUser){
        return children
    }
    else{
        return <Navigate to="/login" state={location.pathname}/>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;