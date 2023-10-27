import moment from "moment/moment";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="my-6">
            <Link to="/">
            <img className="mx-auto max-w-sm" src={logo} alt="The Royal News" />
            </Link>
            <div className="opacity-70 font-semibold text-center space-y-2">
            <p>Jouranalism Without Fear or Favor</p>
            <p>{moment().format('dddd MMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;