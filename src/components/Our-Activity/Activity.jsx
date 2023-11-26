import React from 'react'
import './Activity.css'
import activity1 from '../../assets/images/activities1.png'
import activity2 from '../../assets/images/activities2.png'
import activity3 from '../../assets/images/activities3.png'
import activity4 from '../../assets/images/activities4.png'
import activity5 from '../../assets/images/activities5.png'
import activity6 from '../../assets/images/activities6.png'
import activity7 from '../../assets/images/activities7.png'
import activity8 from '../../assets/images/activities8.png'

const Activity = () => {
    return (
        <div className='main-active'>
            <section className="activities">
                <h1 className="heading-activity">our <span className='text-[#7600FF]'>activities</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src={activity1} alt />
                        <h3>games and fun</h3>
                    </div>
                    <div className="box">
                        <img src={activity2} alt />
                        <h3>games and fun</h3>
                    </div>
                    <div className="box">
                        <img src={activity3} alt />
                        <h3>games and fun</h3>
                    </div>
                    <div className="box">
                        <img src={activity4} alt />
                        <h3>games and fun</h3>
                    </div>
                    <div className="box">
                        <img src={activity5} alt />
                        <h3>games and fun</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Activity
