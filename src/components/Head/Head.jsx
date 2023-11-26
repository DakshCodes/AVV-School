import React from 'react'
import { Link } from 'react-router-dom';
import './Head.css';
import pdf from '../../assets/AdityaVidhyaViharSchoolBrochure.pdf';
import logo from '../../assets/avv1.jpg';


const Head = () => {
    return (
        <>
            <header className="header !relative md:!fixed">
                <Link to={'/'} className="logo">
                    <img className='h-[6rem] md:h-[7rem]' src={logo} alt="" />
                </Link>
                <nav className="navbar !hidden md:!block">
                    <Link to={'/about'}>about</Link>
                    <Link to={'/gallery'}>gallery</Link>
                    <Link to={'/contact'}>contact</Link>
                    <a href='https://www.youtube.com/@adityavidhyaviharshikshasa7490/videos' target={'_blank'}>Videos</a>
                </nav>
                <nav className="navbar2 block md:!hidden">
                    <Link to={'/about'}>about</Link>
                    <Link to={'/gallery'}>gallery</Link>
                    <Link to={'/contact'}>contact</Link>
                    <a href='https://www.youtube.com/@adityavidhyaviharshikshasa7490/videos' target={'_blank'}>Videos</a>
                </nav>
                <a href={pdf} download>
                    <button className="contactButton">Brochure
                        <div className="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" /></svg>
                        </div>
                    </button>
                </a>
            </header>
        </>
    )
}

export default Head
