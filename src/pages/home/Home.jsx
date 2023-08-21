import './Home.css';
import { useOutletContext } from "react-router";

const Home = () => {
    const data = useOutletContext();
    return <div>
        <div className='top-part'>
            <div className='heading'>
                {data.motto}
            </div>
            <div className='about'>
                {data.mainAbout}
            </div>
            <div className='main-buttons'>
                <button className='btn learn-more'>Learn More</button>
                <button className='btn sune10'>Sune 1.0</button>
            </div>
        </div>
        <div className='history'></div>
        <div className='discord'></div>
    </div>;
}

export default Home;