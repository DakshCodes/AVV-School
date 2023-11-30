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
                        <p>mon - thurs: 08:00 am to 12:30 pm</p>
                        <p>friday: 09:00 am to 12:00 pm</p>
                    </div>
                    <div className="icons">
                        <i className="fas fa-envelope" />
                        <h3>Address</h3>
                        <p>
                            Address – F-115,116, New Bapu Nagar, Bhilwara, PIN Code – 311001
                        </p>
                    </div>
                    <div className="icons">
                        <i className="fas fa-phone" />
                        <h3>Mobile No. or WhatApp</h3>
                        <p>91-8239179302</p>
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src='https://i.pinimg.com/564x/04/e4/7b/04e47b98b7e9a410533a286406566655.jpg' alt />
                    </div>
                    <form action>
                        <h3>get in touch</h3>
                        <div className="inputBox">
                            <input type="text" placeholder="your name" />
                            <input type="email" placeholder="your email" />
                        </div>
                        <div className="inputBox">
                            <input type="number" placeholder="your number" />
                            <input type="text" placeholder="your subject" />
                        </div>
                        <textarea placeholder="your message" cols={30} rows={10} defaultValue={""} />
                        <input type="submit" defaultValue="send message" className="btn" />
                        <button className='btn m-auto !px-10'>Submit</button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Contact
