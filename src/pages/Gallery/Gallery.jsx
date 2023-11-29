import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'
import GalleryImages from './Galleryphotos';


const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='main-gallery'>
            <section className="gallery" id="gallery">
                <h1 className="heading-gallery">our <span className='text-[#7600FF]'>gallery</span></h1>
                <div className="gallery-container">
                    {GalleryImages.map((ImageComponent, index) => (
                        <a href={ImageComponent.src} className="box" key={index}>
                            <img src={ImageComponent.src} alt={ImageComponent.alt} />
                            <div className="icon">
                                {/* Your SVG or additional content here */}
                                <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#fff" stroke="#fff">
                                    {/* Your SVG paths here */}
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Gallery
