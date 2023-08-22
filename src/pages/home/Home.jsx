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
        <div className='history'>
            <div className='history-img'></div>
            <div className='history-content'>
                <div className='_history heading'>History</div>
                <div className='_history text'>{data.history}</div>
            </div>
        </div>
        <div className='discord'>
            <div className='discord-content'>
                <div className='_discord heading'>Join Our Discord</div>
                <div className='_discord text'>{data.discordText}</div>
                <button className='_discord btn'>
                    <a href={data.discordLink} target="_blank" rel="noreferrer">Join Discord</a>
                </button>
            </div>
            <div className='discord-embed'>
                <iframe title="TheSune Discord" src="https://discord.com/widget?id=939573906535223326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    </div>;
}

export default Home;