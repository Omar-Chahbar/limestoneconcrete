import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import heroImg from '../images/concretetest.jfif';
import heroImg2 from '../images/concretetest2.jfif';
import heroImg3 from '../images/concretetest3.jfif';

const Portfolio = () => {
    return (
        <>
            <div className="py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-gray-50 uppercase font-bold">Portfolio</h2>
                <div className='flex justify-center'> <div className='w-24 border-b-4 border-gray-50 mb-8'></div></div>
                <div className='flex justify-center carouselcon'> 
                        <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img src={heroImg} />
                            </div>
                            <div>
                                <img src={heroImg2} />
                            </div>
                            <div>
                                <img src={heroImg3} />
                            </div>
                        </Carousel>
                    </div>
            </div>  
        </>
    )
}

export default Portfolio;