import React, { useEffect } from 'react'
import Imgslider from '../../components/Imgslider/Imgslider'
import Activity from '../../components/Our-Activity/Activity'
import Education from '../../components/Our-Education/Education'
import './Home.css'
import slide1 from '../../assets/slider1.jpg'
import slide2 from '../../assets/slider2.jpg'
import slide3 from '../../assets/slider3.jpg'

const Home = () => {
    const slides = [
        { url: slide1 },
        { url: slide2 },
        { url: slide3 },
    ];
    const containerStyles = {
        width: "100%",
        height: "40vw",
        margin: "0 auto",
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='home-main p-0 md:py-[90px]'>
            <div style={containerStyles} className='!bg-[#f5f2eb]'>
                <Imgslider slides={slides} />
            </div>
            <Education />
        </div>
    )
}

export default Home
