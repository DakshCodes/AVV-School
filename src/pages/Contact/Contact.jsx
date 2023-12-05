import React, { useEffect } from 'react'
import './Contact.css'
import gif from '../../assets/images/contact.gif'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='contact-main'>

            <section className="contact" id="contact">
                <h1 className="heading-contact">Contact <span className='text-[#7600FF]'>Us</span></h1>
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-clock" />
                        <h3>opening hours :</h3>
                        <p>Monday to Saturday : Morning 9 AM to 1 PM</p>
                    </div>
                    <div className="icons">
                        <i className="fas fa-envelope" />
                        <h3>Address</h3>
                        <p>
                            Address - F-115,116, New Bapu Nagar, Bhilwara, PIN Code - 311001
                        </p>
                    </div>
                    <div className="icons">
                        <i className="fas fa-phone" />
                        <h3>Mobile No. or WhatApp</h3>
                        <p>91-8239179302</p>
                    </div>
                </div>
               <img className='object-contain m-auto rounded-2xl' src="https://i.pinimg.com/564x/c5/57/91/c557915f4b0089b8a3574f7f63075329.jpg" alt="" />
            </section>

        </div>
    )
}

export default Contact
