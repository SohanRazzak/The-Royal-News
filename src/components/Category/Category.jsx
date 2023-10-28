import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import { useContext, useEffect, useState } from "react";
import NewsTicker from "../NewsTicker/NewsTicker";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NewsCard from "../NewsCard/NewsCard";
import { HashLoader } from "react-spinners";
import { FaBan } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Category = () => {
    const { catID } = useParams();
    const [categories, setCategories] = useState([]);
    const { news } = useContext(AuthContext)
    const [ thisCategoryNews, setThisCategoryNews] = useState([])

    const itemsPerPage = 5;
    const pageCount = Math.ceil(thisCategoryNews.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * itemsPerPage;
    const currentData = thisCategoryNews.slice(offset, offset + itemsPerPage);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0,0)
    };
    
    
    useEffect(() => {
        fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching data:", error));
            
            catID == '0' ?
            setThisCategoryNews(news) :
            setThisCategoryNews(news.filter(n => n.category_id === catID))

    }, [catID, news]);
            
    
    if (!categories || categories.length === 0) {
        return (
            <div className="h-screen flex justify-center items-center">
                <HashLoader color="#D72050" size="80px"/>
            </div>
        )
    }


    return (
        <div>
            <Header />
            <NewsTicker/>
            <Navbar />
            <div className="grid md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-3 lg:gap-5 my-6 md:my-10 mx-auto">
                <div>
                    <LeftSideBar />
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                <h2 className="max-w-7xl mx-auto text-xl font-semibold p-4">
                All News For: {categories[catID].name}
            </h2>
                    {thisCategoryNews.length === 0 ? <p className="text-xl text-gray-600 text-center my-8 font-medium flex flex-col justify-center items-center gap-5 "><FaBan className="text-center text-rose-400 text-5xl"/> Nothing found on this category!</p> : ""}
                    {currentData.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}/>)}
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

export default Category;
