import Marquee from "react-fast-marquee";
import { FaBolt } from "react-icons/fa";

const NewsTicker = () => {
    return (
        <div className="flex px-4 bg-gray-100 py-3 font-semibold">
            <button className="flex items-center gap-1 px-4 py-2 bg-rose-700 text-white">
            <FaBolt className="text-sm"/> Latest
            </button>
            <Marquee>
                I can be a React component, multiple React components, or just
                some text.s
            </Marquee>
        </div>
    );
};

export default NewsTicker;
