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
                        <p>We provide a platform to our students through many activities where they learn to plan, prepare and perform which help them to remove public speaking fear & become expressive</p>
                        <img src='https://i.pinimg.com/564x/6b/1a/4f/6b1a4f964b9f0139e4f7b9c7ad8d006e.jpg' alt />
                    </div>
                    <div className="box">
                        <h3>Learn with fun</h3>
                        <p>We have assimilated some edutaining games in our curriculum which makes learning fun and easy to remember the complex concepts</p>
                        <img src='https://i.pinimg.com/564x/c8/5f/89/c85f89a821458339c41fbe580d6e3110.jpg' alt />
                    </div>
                    <div className="box">
                        <h3>Computer Lessons</h3>
                        <p>We also hold some classes for our students to get foundational level knowledge of computer and its functionality to align themselves with the modern world.</p>
                        <img src='https://i.pinimg.com/564x/a8/eb/35/a8eb354dc19d5150bfb719a9aedb4e92.jpg' alt />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
