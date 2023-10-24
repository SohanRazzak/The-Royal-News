import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const NewsCard = () => {
    return (
        <div className="bg-gray-100 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">Jimmy Dane</p>
                        <p className="text-xs text-gray-600">
                            2022-08-24 17:27:34
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-2xl">
                    <button className="text-gray-600">
                        <FaBookmark />
                    </button>
                    <button className="text-gray-600">
                        <FaShare />
                    </button>
                </div>
            </div>
            <h1 className="text-xl font-bold mt-4">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
            </h1>
            <img
                src="https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"
                alt="Thumbnail"
                className="object-cover w-full max-h-[280px] rounded-md mt-5 mb-8"
            />
            <p className="text-gray-700 mt-4">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military aid for Kyiv as Ukraine marked its independence day six
                months after Russia invaded the country.The United States of
                America is committed to supporting the people of Ukraine as they
                continue the fight to defend their sovereignty. As part of that
                commitment, I am proud to announce our biggest tranche of
                security assistance to date: approximately $2.
            </p>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <StarRatings
                        rating={4.5}
                        starDimension="24px"
                        starRatedColor="#FF8C47"
                        starSpacing="3px"
                    />
                    <p className="text-sm ml-2 text-gray-700 font-medium">
                        4.5 (Excellent)
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="text-gray-600">
                        <FaEye />
                    </div>
                    <p className="text-sm ml-2 text-gray-700 font-medium">
                        488 Views
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
