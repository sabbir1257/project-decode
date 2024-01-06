import React from 'react';

// img 
import great1 from "../../assets/great1.png"
import great2 from "../../assets/great2.png"
import great3 from "../../assets/great3.png"

// tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const OurGreatWork = () => {
    return (
        <main className='relative'>
            <div className='mt-16 md:px-[250px]'>
                <div className='text-center'>
                    <p className='text-[#7BC0E3] pt-4 font-bold'>Portfolio</p>
                    <h1 className='text-6xl font-black my-7'>Our Great Work</h1>
                </div>
                <Tabs>
                    <TabList className="text-center">
                        <Tab><p className='text-[#7BC0E3]'>Website Optimization</p></Tab>
                        <Tab><p className='text-[#7BC0E3]'>Website Redesign</p></Tab>
                        <Tab><p className='text-[#7BC0E3]'>Search Engine Optimization</p></Tab>
                    </TabList>
                    <TabPanel>
                        <Swiper
                            navigation={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation]}
                            className="my-20 mySwiper">
                            <SwiperSlide>
                                <div>
                                    <img src={great1} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great3} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great2} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>
                            {/* part 2 */}
                            <SwiperSlide>
                                <div>
                                    <img src={great1} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great3} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great2} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            navigation={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation]}
                            className="my-20 mySwiper">
                            <SwiperSlide>
                                <div>
                                    <img src={great1} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great3} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great2} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>
                            {/* part 2 */}
                            <SwiperSlide>
                                <div>
                                    <img src={great1} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>



                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great3} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great2} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            navigation={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation]}
                            className="my-20 mySwiper">
                            <SwiperSlide>
                                <div>
                                    <img src={great1} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great3} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great2} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>
                            {/* part 2 */}
                            <SwiperSlide>
                                <div>
                                    <img src={great1} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>



                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great3} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={great2} alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>
                </Tabs>
                <div className='relative z-10 text-center pb-11 top-5 drop-shadow-2xl '>
                    <button><Link to="/" className='bg-[#292525] text-white text-2xl px-8 py-2 rounded-full text-center '>See All</Link></button>
                </div>
            </div>
            <div className='w-full h-[40%] bg-[#60E1CB] absolute top-[55%]'>

            </div>
        </main>
    );
};

export default OurGreatWork;