import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import NewsTicker from "../NewsTicker/NewsTicker";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReactPaginate from "react-paginate";

const Home = () => {
    const { news } = useContext(AuthContext);

    const itemsPerPage = 5;
    const pageCount = Math.ceil(news.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * itemsPerPage;
    const currentData = news.slice(offset, offset + itemsPerPage);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0,0)
    };

    return (
        <div>
            <Header />
            <NewsTicker />
            <Navbar />
            <div className="grid md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-3 lg:gap-5 my-6 md:my-10 mx-auto">
                <div>
                    <LeftSideBar />
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                    <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2">
                        The Royal News: Home Page
                    </h3>
                    {currentData.map((singleNews) => (
                        <NewsCard
                            key={singleNews._id}
                            singleNews={singleNews}
                        ></NewsCard>
                    ))}
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={"text-gray-600 font-medium flex gap-3 mx-3 border-2 border-indigo-300 rounded-md p-2 justify-center"}
                        pageLinkClassName={"h-7 w-7 rounded-md border-2 border-rose-200 text-center block"}
                        activeClassName={"font-semibold rounded-md bg-gray-200"}
                        nextClassName={"rounded-md px-2 bg-teal-600 text-white"}
                        previousClassName={"rounded-md px-2 bg-rose-500 text-white"}
                    />
                </div>
                <div className="mx-auto">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
