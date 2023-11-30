import React, { useEffect } from 'react'
import './About.css'
import img from '../../assets/gallery/A27.jpg'


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (<>
        <section className="section about" id="about" aria-label="about">
            <h1 className="heading-gallery">About <span className='text-[#7600FF]'>Us</span></h1>
            <div className="container">
                <figure className="about-banner">
                    <div className="img-holder" style={{ "width": 620, "height": 500 }}>
                        <img src={img} width={620} height={470} loading="lazy" alt="about banner" className="img-cover" />
                    </div>
                </figure>
                <div className="about-content">
                    <p className="section-text">
                        As the name shows, Aditya means Sun, Vidhya means Education & Vihar means to make it reach in each corner so has been Aditya Vidhya Vihar School setting as an example
                        Aditya Vidhya Vihar Primary School has been contributing in the field of Education for more than 2 decades This committed organization has produced many successful Teachers, Chartered Accountants,  IIT Engineers, Managers & many other types of professionals with its values of imparting knowledge, skills, etiquette, manners, creativity & most importantly understanding of life not just through the words but also through the behavior
                        Aditya Vidhya Vihar runs under Aditya Vidhya Vihar Shiksha Samiti which is the philanthropic Organization of AVV It was founded in 1999 by Shri Rajendra Kumar Modi & Smt Madhu Modi with a mission to enlighten the students & make their lives meaningful
                        Aditya Vidhya Vihar School has been running with its values that is the reason that it has been successfully giving the results & being trusted school for all the parents
                        Our Mission
                        To make Education available for all kinds of students while imparting good values, morals & skills as per contemporary requirements & demands
                    </p>
                    <ul className="about-list">
                        <li className="about-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#7600FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="span">Expert Teachers</span>
                        </li>
                        <li className="about-item ml-1">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#7600FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="span">satisfied learning</span>
                        </li>
                        <li className="about-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#7600FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="span">trusted school</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    </>
    )
}

export default About
