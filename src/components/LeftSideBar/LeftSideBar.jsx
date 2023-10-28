import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarNewsCard from "../SidebarNewsCard/SidebarNewsCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LeftSideBar = () => {
    const [categories , setCategories] = useState([])
    const {mostViewed} = useContext(AuthContext)

    useEffect(()=>{
        fetch("/categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])



    return (
        <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2"><span className="h-5 w-2 bg-rose-700 block"></span> All Category</h3>
            <div className="px-1 mb-6 flex flex-wrap gap-2 md:block">
            {
            categories.map(category => (
            <NavLink key={category.id}
            className={({ isActive }) =>
            isActive ? "bg-gray-200 px-8 md:pl-8 block text-lg font-medium text-gray-800 py-3" : " px-6 md:pl-6 block text-lg font-medium text-gray-500 py-3"
            }
            to={`/category/${category.id}`}>{category.name}</NavLink>
            )
        )}
            </div>

            <div className="hidden md:block mx-1">
            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2"><span className="h-5 w-2 bg-rose-700 block"></span> Most Viewd</h3>
                {
                    mostViewed ? mostViewed.map(newsItem => <SidebarNewsCard key={newsItem._id} newsItem={newsItem}/>): ''
                }
            </div>
        </div>
    );
};

export default LeftSideBar;