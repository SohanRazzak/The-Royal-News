import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import { useEffect, useState } from "react";
import NewsTicker from "../NewsTicker/NewsTicker";

const Category = () => {
    const { catID } = useParams();
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch("/categories.json")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!categories || categories.length === 0) {
        return null;
    }

    return (
        <div>
            <Header />
            <NewsTicker/>
            <Navbar />
            <h2 className="max-w-7xl mx-auto text-2xl font-semibold p-4">
                All News For: {categories[catID].name}
            </h2>
            <div className="grid md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-5 my-6 md:my-10 mx-auto">
                <div>
                    <LeftSideBar />
                </div>
                <div className="border-2 h-screen md:col-span-2 lg:col-span-3">
                    {/* Display the news content for the selected category here */}
                </div>
                <div className="border-2 h-screen">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default Category;
