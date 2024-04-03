import React, { useState, useEffect } from 'react';
import './bannerSlide.css';

const SliderBanner = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 10000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const bannerOnClick = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    }

    return (
        <div className="bannerslide">
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => bannerOnClick()}
                        className={
                            index === currentSlide
                                ? 'slide active'
                                : index === currentSlide - 1 ||
                                    (currentSlide === 0 && index === slides.length - 1)
                                    ? 'slide prev'
                                    : 'slide'
                        }
                    >
                        <img src={window.screen.width > 1100 ? slide.image : slide.imagem} alt={slide.caption} />
                        <div className={
                            slide.id == 1 || slide.id == 3
                                ? 'caption caption-white'
                                : 'caption caption-black'
                        }>
                            <h2>{slide.caption}</h2>
                            <h3>{slide.sub}</h3>
                            <div className="caption-bt" onClick={() => {
                                slide.id == 0 || slide.id == 3
                                    ? window.open(slide.link)
                                    : location.href=slide.link
                            }}>See more</div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderBanner;
