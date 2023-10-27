import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSideBar from "../RightSideBar/RightSideBar";

const About = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl gap-5 my-6 md:my-10 mx-auto">
                <div className="bg-gray-50 p-8 md:col-span-3">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-3xl font-semibold text-blue-400 mb-4">
                            About The Royal News
                        </h1>
                        <p className="text-gray-700 tracking-wide leading-relaxed md:tracking-wider md:leading-loose">
                            Welcome to The Royal News, your source for the
                            latest international news. We are committed to
                            delivering high-quality, reliable, and unbiased news
                            from around the world. Our team of dedicated
                            journalists works tirelessly to keep you informed
                            about the most significant events and stories that
                            matter to you.
                        </p>
                        <p className="text-gray-700 tracking-wide leading-relaxed md:tracking-wider md:leading-loose mt-4">
                            At The Royal News, we value integrity, accuracy, and
                            transparency. Our mission is to provide you with
                            up-to-date information, in-depth analysis, and
                            diverse perspectives on global affairs. We cover a
                            wide range of topics, including politics, economics,
                            culture, technology, and more.
                        </p>
                        <p className="text-gray-700 tracking-wide leading-relaxed md:tracking-wider md:leading-loose mt-4">
                            We appreciate your trust in us as your go-to source
                            for international news. If you have any questions,
                            feedback, or story suggestions, please feel free to
                            get in touch with us. We are here to serve and
                            inform you, our readers, with the latest news from
                            across the globe.
                        </p>
                    </div>
                </div>
                <div className="mx-auto">
                    <RightSideBar />
                </div>
            </div>
        </>
    );
};

export default About;
