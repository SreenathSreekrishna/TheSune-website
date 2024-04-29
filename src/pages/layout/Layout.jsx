import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = (props) => {
    return (
        <>
        <nav className='nav-container'>
            <ul className='nav'>
                <div className='left-nav'>
                    <li className='nav-item'>
                        <Link to="/^3athon">^3athon</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/archive">Archive</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/members">Members</Link>
                    </li>
                </div>
                <div className='right-nav'>
                    <li className='nav-item'>
                        <Link to="/achievements">Achievements</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <button className="btn discord-btn">
                            <a href={props.data.discordLink} target="_blank" rel="noreferrer">Join Discord</a>
                        </button>
                    </li>
                </div>
            </ul>
            <div className='logo'>
                <Link to="/">
                    <img src="/logo.png" alt="TheSune logo" />
                </Link>
            </div>
        </nav>

        <div className='bg-img'>
        </div>

        <Outlet context={props.data} />
        <div className="footer">
            Website co-created by&nbsp;<span className="name"><a href="https://discordapp.com/users/933911132408799272" target="_blank" rel="noreferrer">Sreenath Sreekrishna</a></span>&nbsp;and&nbsp;<span className="name"><a href="https://www.rover.com/blog/wp-content/uploads/black-dog-min.jpg" target="_blank" rel="noreferrer">&nbsp;Kanishka Kumar</a></span>
        </div>
        </>
    )
};

export default Layout;