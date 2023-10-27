import { PropTypes } from "prop-types";
import { useState } from "react";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";

const NewsCard = ({singleNews}) => {

    const { details, author, rating, image_url, title, total_view, _id } = singleNews
    const [isBookmarkedLocal, setIsBookmarkedLocal] = useState(null)


    const handleBookmark = (id) =>{
        const bookmarked = localStorage.getItem("bookamrkedNews")
        if (bookmarked == null){
            localStorage.setItem("bookamrkedNews", JSON.stringify([id]))
        }
        else{
            const prevBookmarks = JSON.parse(bookmarked)
            const isExistBookmark = prevBookmarks.find(item => item == id)
            if(!isExistBookmark){
                localStorage.setItem("bookamrkedNews", JSON.stringify([...prevBookmarks, id]))
            }
            else{
                toast("Already Bookmarked!!")
            }
        }
        setIsBookmarkedLocal(true)
    }

    const isBookmarked = (id)=>{
        const bookmarked = localStorage.getItem("bookamrkedNews")
        const prevBookmarks = JSON.parse(bookmarked)
        if(prevBookmarks !== null){
            return prevBookmarks.find(item => item == id) ? true : false
        }
    }

    return (
        <div className="m-2 rounded-lg border mb-5">
            <div className="bg-gray-100 flex items-center justify-between py-4 px-3">
                <div className="flex items-center gap-2">
                    <img
                        src={author.img}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                        <p className="text-sm font-semibold mb-1">{author.name}</p>
                        <p className="text-xs text-gray-600">
                            {author.published_date && author.published_date.slice(0,10)}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-2xl">
                    <button className="text-gray-600">
                        <FaBookmark onClick={()=> handleBookmark(_id)} className={isBookmarkedLocal ? "text-rose-600" : "" || isBookmarked(_id)? "text-rose-600" : ""}/>
                    </button>
                    <button className="text-gray-600">
                        <FaShare onClick={()=> toast("You Can Implement Social Share React Component Easily!!")}/>
                    </button>
                </div>
            </div>
            <div className="px-3">
            <h1 className="text-xl font-bold mt-4">
                {title}
            </h1>
            <img
                src={image_url}
                alt="Thumbnail"
                className="object-cover w-full max-h-[280px] rounded-md mt-5 mb-8"
            />
            <p className="text-gray-700 mt-4">
                {details.length > 250 ? details.slice(0,250)+"..." : details}
                <span className="ml-2 font-semibold text-orange-500"><Link to={`/news/${singleNews._id}`}>Read More</Link></span>
            </p>
            <hr className="mt-4 border-gray-300" />
            <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                    <StarRatings
                        rating={rating.number}
                        starDimension="24px"
                        starRatedColor="#FF8C47"
                        starSpacing="3px"
                    />
                    <p className="text-md ml-2 text-gray-700 font-medium">
                        {rating.number+ ' (' +rating.badge + ') '}
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="text-gray-600">
                        <FaEye />
                    </div>
                    <p className="text-md ml-2 text-gray-700 font-medium">
                        {total_view} Views
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singleNews: PropTypes.object
}

export default NewsCard;
