import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header"
import NewsTicker from "../NewsTicker/NewsTicker";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
    return (
        <div>
            <Header/>
            <NewsTicker/>
            <Navbar/>
            <div className="grid md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-5 my-6 md:my-10 mx-auto">
                <div>
                    <LeftSideBar/>
                </div>
                <div className="border-2 h-screen md:col-span-2 lg:col-span-3">
                <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2">The Royal News: Home Page</h3>

                <NewsCard/>

                </div>
                <div className="border-2 h-screen">
                    <RightSideBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;