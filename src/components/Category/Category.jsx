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

const Category = () => {
    const { catID } = useParams();
    const [categories, setCategories] = useState([]);
    const { news } = useContext(AuthContext)
    const [ thisCategoryNews, setThisCategoryNews] = useState([])
    
    
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
    
    console.log(thisCategoryNews);

    return (
        <div>
            <Header />
            <NewsTicker/>
            <Navbar />
            <div className="grid md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-5 my-6 md:my-10 mx-auto">
                <div>
                    <LeftSideBar />
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                <h2 className="max-w-7xl mx-auto text-xl font-semibold p-4">
                All News For: {categories[catID].name}
            </h2>
                    {thisCategoryNews.length === 0 ? <p className="text-xl text-gray-600 text-center my-8 font-medium flex flex-col justify-center items-center gap-5 "><FaBan className="text-center text-rose-400 text-5xl"/> Nothing found on this category!</p> : ""}
                    {thisCategoryNews.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}/>)}
                </div>
                <div>
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default Category;
