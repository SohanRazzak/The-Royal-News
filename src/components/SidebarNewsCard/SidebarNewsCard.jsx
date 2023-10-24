// demo import
import demoImg from "../../assets/1.png"


const SidebarNewsCard = () => {
    return (
        <div className="mx-auto">
            <img className="w-full object-cover h-36 rounded-md" src={demoImg} alt="" />
            <p className="text-xl font-semibold my-5 text-gray-800">Lorem ipsum dolor sit, amet consectetur elit.</p>
        </div>
    );
};

export default SidebarNewsCard;