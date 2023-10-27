import swimming from "../../assets/qZone1.png";
import classroom from "../../assets/qZone2.png";
import playground from "../../assets/qZone3.png";

const QZone = () => {
    return (
        <div className="bg-gray-100 rounded-md pb-1">
            <h3 className="flex items-center gap-2 text-xl font-semibold py-4 pl-2">
                <span className="h-5 w-2 bg-rose-700 block"></span> Q-Zone
            </h3>
            <img src={swimming} alt="Swimming" className="px-3 mb-5 mx-auto" />
            <img src={classroom} alt="Classeroom" className="px-3 mb-5 mx-auto" />
            <img src={playground} alt="Play Ground" className="px-3 mb-5 mx-auto" />
        </div>
    );
};

export default QZone;
