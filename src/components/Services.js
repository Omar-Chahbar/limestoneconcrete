import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-gray-100 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 text-gray-50'></div>
                        </div>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-gray-100 transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <h2 className="font-semibold my-4 text-2xl text-center">Driveways</h2>
                                    <p className="text-md font-medium">
                                    Our expertly crafted concrete driveways are designed to withstand heavy use and the elements while enhancing the curb appeal of your property. We offer a range of finishes, including brushed, stamped, and exposed aggregate, to complement the aesthetic of your home. Our driveways are built to last, ensuring durability and longevity
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <h2 className="font-semibold my-4 text-2xl text-center">Patios</h2>
                                    <p className="text-md font-medium">
                                    Transform your outdoor living space with our custom concrete patios. Ideal for entertaining or relaxing, our patios can be tailored to your specific style and functional needs. Choose from a variety of textures and patterns, including stamped concrete and decorative overlays, to create a beautiful and lasting addition to your home
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Sidewalks</h2>
                                    <p className="text-md font-medium">
                                    We specialize in creating durable and safe concrete sidewalks that provide a clean, attractive pathway for pedestrians. Whether you need a new installation or repairs to existing sidewalks, our team ensures smooth, even surfaces that comply with all safety regulations and enhance the overall look of your property
                                    </p>
                                </div>
                            </div>
  
                            <div className="bg-gray-100 transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <h2 className="font-semibold my-4 text-2xl text-center ">& Much More</h2>
                                    <p className="text-md font-medium">
                                    We offer a wide range of other concrete services to meet your needs. This includes concrete foundations, retaining walls, pool decks, and decorative concrete solutions. No matter the project, our team delivers high-quality workmanship and exceptional customer service to ensure your complete satisfaction
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;