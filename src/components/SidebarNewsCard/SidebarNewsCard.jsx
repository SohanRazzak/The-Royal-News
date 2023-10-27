import {PropTypes} from 'prop-types';
import { FaCalendar } from 'react-icons/fa';


const SidebarNewsCard = ({newsItem}) => {
    const { title, image_url, author } = newsItem
    return (
        <div className="mx-auto mb-5 max-w-[240px]">
            <img className="w-full object-cover h-30 lg:h-36 rounded-md" src={image_url} alt="" />
            <p className="text-lg lg:text-xl font-semibold mt-2 text-gray-700 p-1 lg:p-2">{title}</p>
            <p className="text-gray-600 flex items-center gap-2 p-1 lg:p-2">
                <FaCalendar/>{author.published_date.slice(0,10)}
            </p>
        </div>
    );
};

SidebarNewsCard.propTypes = {
    newsItem: PropTypes.object
}

export default SidebarNewsCard;