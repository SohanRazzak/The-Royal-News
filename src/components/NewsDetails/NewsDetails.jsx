import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideBar from "../RightSideBar/RightSideBar";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const NewsDetails = () => {
    const {newsLink} = useParams()
    const [newsDetail, setNewsDetail] = useState()
    
    
    useEffect(()=>{
        fetch('/news.json')
        .then(res=> res.json())
        .then(data => {
            const currentNews = data.find(d=> d._id === newsLink)
            setNewsDetail(currentNews)
        })
    },[newsLink])

    if(!newsDetail){
        return null
    }
    const { title , details, image_url, category_id} = newsDetail

    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl gap-5 my-6 md:my-10 mx-auto">
                <div className="col-span-3 border rounded-md mx-1 p-5 md:p-8">
                    <img src={image_url}
                        alt={title}
                        className="object-cover w-full max-h-[440px] rounded-md mb-8"
                    />
                    <p className="text-gray-500 tracking-wide">{details}</p>
                    <Link to={`/category/${category_id}`}>
                        <button className="text-white font-semibold bg-rose-700 flex gap-2 items-center justify-center mt-5 py-2 px-3 text-lg">
                        <FaArrowLeft/> All news in this category
                        </button>
                    </Link>
                </div>
                <div>
                <RightSideBar/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;