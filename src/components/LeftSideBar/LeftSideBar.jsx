import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarNewsCard from "../SidebarNewsCard/SidebarNewsCard";

const LeftSideBar = () => {
    const [categories , setCategories] = useState([])

    useEffect(()=>{
        fetch("/categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    console.log(categories);


    return (
        <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2"><span className="h-5 w-2 bg-rose-700 block"></span> All Category</h3>
            <div className="px-1 mb-6">
            {
            categories.map(category => (
            <NavLink key={category.id}
            className={({ isActive }) =>
            isActive ? "bg-gray-200 pl-8 block text-xl font-medium text-gray-800 py-3" : " pl-6 block text-xl font-medium text-gray-500 py-3"
            }
            to={`/category/${category.id}`}>{category.name}</NavLink>
            )
        )}
            </div>

            <div className="hidden md:block">
                <SidebarNewsCard/>
            </div>
        </div>
    );
};

export default LeftSideBar;