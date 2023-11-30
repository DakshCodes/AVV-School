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
                            <img className='h-[8rem] md:h-[15rem] object-contain' src={logo} alt="" />
                        </h1>
                    </div>
                    <div className="box h-[100%] w-[80%]">
                        <h3 className='font-via'>quick links</h3>
                        <Link to={'/about'}> <i className="fas fa-caret-right" />About</Link>
                        <Link to={'/gallery'}> <i className="fas fa-caret-right" />Gallery</Link>

                    </div>
                    <div className="box h-[100%] w-[80%]">
                        <h3 className='font-via'>category</h3>
                        <p className='font-medium'>Address – F-115,116, New Bapu Nagar, Bhilwara, PIN Code – 311001</p>
                    </div>

                </div>
                <div className="credit">©copyright @ 2023 by <span>Aditya Vidhya Vihar School</span></div>
            </section>
        </div>
    )
}

export default Footer
