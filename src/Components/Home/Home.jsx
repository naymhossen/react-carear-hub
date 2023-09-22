import Banner from "../Header/Banner";
import Categorylist from "../Categorylist/Categorylist";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorylist></Categorylist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;