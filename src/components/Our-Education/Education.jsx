import React from 'react'
import './Education.css'
import edu1 from '../../assets/images/education1.png'
import edu2 from '../../assets/images/education2.png'
import edu3 from '../../assets/images/education3.png'

const Education = () => {
    return (
        <div className='main-education'>
            <section className="education" id="education">
                <h1 className="heading-eductaion">our <span className='text-[#7600FF]'>Education</span></h1>
                <div className="box-container">
                    <div className="box">
                        <h3>Stage-Fear Lessons</h3>
                        <p>Building Confidence: Fun Stage-Fear Lessons for Kids to Embrace Self-Expression and Overcome Fear, Sparking Confidence in Learning</p>
                        <img src='https://i.pinimg.com/564x/6b/1a/4f/6b1a4f964b9f0139e4f7b9c7ad8d006e.jpg' alt />
                    </div>
                    <div className="box">
                        <h3>sports lessons</h3>
                        <p>Engaging Sports Lessons Fostering Teamwork, Discipline, and Well-being for Students' Holistic Development</p>
                        <img src='https://i.pinimg.com/564x/c8/5f/89/c85f89a821458339c41fbe580d6e3110.jpg' alt />
                    </div>
                    <div className="box">
                        <h3>drawing lessons</h3>
                        <p>Step-by-Step Drawing Lessons Inspiring Young Artists to Explore Imagination, Develop Skills, and Unleash Artistic Potential</p>
                        <img src='https://i.pinimg.com/564x/80/b2/9e/80b29ec7444d0371bb801d8028cdc8e6.jpg' alt />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
