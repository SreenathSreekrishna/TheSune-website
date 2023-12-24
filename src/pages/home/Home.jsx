import { useEffect, useState } from 'react';
import './Home.css';
import { useOutletContext } from "react-router";

const Home = () => {
    const data = useOutletContext();
    const [openedImg, setOpenedImg] = useState(2);
    const [startAnim, setStartAnim] = useState(false);
    const handleKeyPress = (e) => {
        if (e.code !== 'ArrowLeft' && e.code !== 'ArrowRight') {
            return;
        }
        let x;
        const t = 400;
        const n = data.historyImages.length;
        if (e.code === 'ArrowRight') {
            x = (openedImg + (n-1)) % n;
        }
        if (e.code === 'ArrowLeft') {
            x = (openedImg + 1) % n;
        }
        setStartAnim(true);
        setTimeout(() => {
            setOpenedImg(x);
        }, t/2);
        setTimeout(() => {
            setStartAnim(false);
        }, t);
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [openedImg, setOpenedImg])
    return <div>
        <div className='top-part'>
            <div className='heading'>
                {data.motto}
            </div>
            <div className='about'>
                {data.mainAbout}
            </div>
            <div className='main-buttons'>
                <button className='btn learn-more'>
                    <a href='#history'>Learn More</a>
                </button>
                <button className='btn sune10'>
                    <a href=''>Sune 1.0</a>
                </button>
            </div>
        </div>
        <div className='history' id='history'>
            <div className='history-content'>
                <div className='_history heading'>How it Began</div>
                <div className='_history text'>{data.history}</div>
            </div>

            <div className='history-imgs'>
                <div className='img-container'>
                    {data.historyImages.map((img,i) => {
                        return <div key={i} className={`img num${i} ${startAnim && i===1 ? 'img-animated' : ''}`} style={{'--imgSrc':`url(${data.historyImages[(4-openedImg+i)%3]})`}}></div>
                    })}
                </div>
                <div className='arrows'>
                    <div className='arrow-right' onClick={() => handleKeyPress({code: 'ArrowRight'})}>&gt;</div>
                    <div className='arrow-left' onClick={() => handleKeyPress({code: 'ArrowLeft'})}>&lt;</div>
                </div>
                <div className='indicators'>
                    {data.historyImages.map((_, i) => {
                        return <div key={i} className='indicator' style={{backgroundColor: `var(--${i === 2-openedImg ? 'bg' : 'text'}-color)`}}></div>
                    })}
                </div>
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
                <iframe title="TheSune Discord" src={data.widgetLink} width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    </div>;
}

export default Home;