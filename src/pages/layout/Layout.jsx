import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = (props) => {
    return (
        <>
        <nav className='nav-container'>
            <ul className='nav'>
                <div className='left-nav'>
                    <li className='nav-item'>
                        <Link to="/sune1.0">Sune 1.0</Link>
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
                        <Link to="/alumni">Alumni</Link>
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
        </>
    )
};

export default Layout;