import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

import { Pagination } from 'swiper/modules';


const References = () => {

    const numberOfSlides: number = 8;

    return (
        <div className="custom-px pt-5 custom-max-w mx-auto" id="references">
            <div className="flex flex-row gap-5">
                <div className="flex flex-col items-center justify-center basis-1/3 bg-blue-100 rounded-3xl py-4 px-12">
                    <h2 className="text-4xl font-semibold pb-7 pt-4">CASE STUDIES</h2>
                    <p className="text-center text-xl font-thin w-5/6">Our offshore development group is experienced in delivering real 
                    results to end users – study our projects to make sure in our competence</p>
                </div>
                <div className='basis-2/3 bg-white rounded-3xl overflow-hidden pr-4'>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={'auto'}
                        autoHeight={true}
                        speed={600}
                        pagination={{
                            clickable: true,
                            renderBullet: function (index:number, className:string) {
                                return '<span class="' + className + '">' + '</span>';
                            }
                        }}
                        grabCursor={true}
                        modules={[Pagination]}
                    >
                        {[...Array(numberOfSlides)].map(() => (
                            <SwiperSlide>
                                <div className="flex flex-row px-15 pt-14 pb-7 items-start gap-5 max-h-full">
                                    <div className="flex flex-col basis-5/12">
                                        <div className="flex flex-col">
                                            <h2 className="text-4xl font-base pb-5">HELLO WORLD!</h2>
                                            <p className="pb-5 custom-size leading-5">Hello World! Tech Solutions develops GreenCode, a cutting-edge software based on open-source technology.
                                            Our team collaborates closely with Hello World! Tech Solutions, contributing to the development of GreenCode modules,
                                            addressing technical challenges, and resolving issues within the existing codebase.</p>
                                        </div>
                                        <div className="pb-4 pt-6">
                                            <span className="about text-gray-300 text-xl">0{1}</span>
                                        </div>
                                        <div className="flex flex-row flex-wrap gap-1 justify-between">
                                            <div className="flex flex-col gap-1 items-center">
                                                <h2 className="custom-text-color text-base font-semibold">Industry</h2>
                                                <p className="text-black custom-size font-semibold">Technology</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-center">
                                                <h2 className="custom-text-color text-base font-semibold">Region</h2>
                                                <p className="text-black custom-size font-semibold">United States</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-center">
                                                <h2 className="custom-text-color text-base font-semibold">Project Team</h2>
                                                <p className="text-black custom-size font-semibold">3 experts</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-center">
                                                <h2 className="custom-text-color text-base font-semibold">Project Duration</h2>
                                                <p className="text-black custom-size font-semibold">Ongoing</p>
                                            </div>
                                        </div>
                                        <div className="pt-24 mt-1.5">
                                            <button className="custom-bg text-white max-w-32 rounded-2xl px-6 py-1 font-medium leading-6">
                                                See more
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col basis-7/12">
                                        <img className="ml-2 mt-1" src={require(".././images/HLWRLD.png")}alt='more'></img>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default References