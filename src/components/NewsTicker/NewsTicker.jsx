import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaBolt, FaBullseye } from "react-icons/fa";

const NewsTicker = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch("../../news.json")
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    return (
        <div className="flex px-4 bg-gray-100 py-3 font-semibold">
            <button className="flex items-center gap-1 px-4 py-2 bg-rose-700 text-white">
            <FaBolt className="text-sm"/> Latest
            </button>
            <Marquee speed={60} pauseOnHover={true}>
                {news?.map(singleNews => <p className="mr-12 flex gap-2 items-center" key={singleNews._id}><FaBullseye color="red"/>{singleNews.title}</p>)}
            </Marquee>
        </div>
    );
};

export default NewsTicker;
