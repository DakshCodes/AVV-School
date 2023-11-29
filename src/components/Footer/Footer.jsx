import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <div className='main-footer'>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h1 className=''>
                            <img className='h-[15rem] object-contain' src={logo} alt="" />
                        </h1>
                    </div>
                    <div className="box">
                        <h3 className='font-via'>quick links</h3>
                        <Link to={'/about'}> <i className="fas fa-caret-right" />About</Link>
                        <Link to={'/gallery'}> <i className="fas fa-caret-right" />Gallery</Link>
                        <Link to={'/'}> <i className="fas fa-caret-right" />school calendar</Link>
                        <Link to={'/'}> <i className="fas fa-caret-right" /> school supply list</Link>
                    </div>
                    <div className="box">
                        <h3 className='font-via'>category</h3>
                        <Link to={'/'}> <i className="fas fa-caret-right" /> academics</Link>
                        <Link to={'/'}> <i className="fas fa-caret-right" /> admissions</Link>
                        <Link to={'/'}> <i className="fas fa-caret-right" /> news &amp; events</Link>
                        <Link to={'/contact'}> <i className="fas fa-caret-right" /> contact us</Link>
                    </div>

                </div>
                <div className="credit">©copyright @ 2023 by <span>Aditya Vidhya Vihar School</span></div>
            </section>
        </div>
    )
}

export default Footer
