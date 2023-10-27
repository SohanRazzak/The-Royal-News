import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoute = ({children}) => {
    const {loggedUser} = useContext(AuthContext)
    if (loggedUser){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;