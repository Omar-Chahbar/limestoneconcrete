import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8 introtext" data-aos="zoom-in" data-aos-delay="500">
                            
                            <div>
                            <h3 className="text-3xl  text-grey-50 font-bold">We develop high quality custom solutions for organizations, institutions and the public.</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Our team is well versed and is ready to help make your dreams a reality.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for building custom solutions that cater to your needs.</p>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;