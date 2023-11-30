import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Head.css';
import pdf from '../../assets/AdityaVidhyaViharSchoolBrochure.pdf';
import logo from '../../assets/avv1.jpg';


const Head = () => {
    const [navbarActive, setNavbarActive] = useState(false);


    const toggleNavbar = () => {
        setNavbarActive(!navbarActive);
    };

    const closeNavbar = () => {
        setNavbarActive(false);
    };

    return (
        <>
            <header className={`header`} >
                <div className="container">
                    <Link to={'/'} className="logo">
                        <img src={logo} alt="Avv logo" />
                    </Link>
                    <nav className={`navbar ${navbarActive ? 'active' : ''}`} >
                        <div className="wrapper">
                            <Link onClick={closeNavbar} to={'/'} className="logo">
                                <img src={logo} alt="Avv logo" />
                            </Link>
                            <button className="nav-close-btn" aria-label="close menu" onClick={closeNavbar}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g> </g></svg>

                            </button>
                        </div>
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <Link to={"/"} className="navbar-link" onClick={closeNavbar}>Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={"/about"} className="navbar-link" onClick={closeNavbar}>About</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={'/gallery'} className="navbar-link" onClick={closeNavbar}>Gallery</Link>
                            </li>
                            <li className="navbar-item">
                                <a href='https://www.youtube.com/@adityavidhyaviharshikshasa7490/videos' target={'_blank'} className="navbar-link" onClick={closeNavbar}>Videos</a>
                            </li>
                            <li className="navbar-item">
                                <Link to={"/contact"} className="navbar-link" onClick={closeNavbar}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <a href={pdf} download className="btn ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M12.0703 22V2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5 8L10 2.84009C10.2571 2.5677 10.5671 2.35047 10.911 2.20215C11.2549 2.05383 11.6255 1.97754 12 1.97754C12.3745 1.97754 12.7451 2.05383 13.089 2.20215C13.4329 2.35047 13.7429 2.5677 14 2.84009L19 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>

                            <span className="span">brochure</span>
                        </a>
                        <button className="header-action-btn" aria-label="open menu" onClick={toggleNavbar}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>

                        </button>
                    </div>
                    <div className={`overlay ${navbarActive ? 'active' : ''}`} />
                </div>
            </header>

            {/* <a href='https://www.youtube.com/@adityavidhyaviharshikshasa7490/videos' target={'_blank'}>Videos</a> */}
        </>
    )
}

export default Head
