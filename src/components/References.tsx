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
        <div className="px-5 pt-5 max-w-custom mx-auto" id="references">
            <div className="flex lg:flex-row flex-col gap-5">
                <div className="flex flex-col items-center justify-center basis-1/3 bg-blue-100 rounded-3xl py-6 px-12">
                    <h2 className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-semibold mb-4">CASE STUDIES</h2>
                    <p className="text-center 2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5 w-5/6">Our offshore development group is experienced in delivering real 
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
                                <div className="flex sm:flex-row flex-col 2xl:p-12 p-8 items-center gap-5 max-h-full">
                                    <div className="flex flex-col basis-1/2">
                                        <div className="flex flex-col">
                                            <h2 className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-base pb-5">Super AG</h2>
                                            <p className="2xl:text-lg sm:text-base text-sm 2xl:leading-6 leading-5">We've engineered a comprehensive operational solution for Super AG, spanning from 
                                            proposal creation to service invoicing. Utilizing advanced M2M technology, our system effortlessly integrates, monitors, and manages 
                                            both silos and their corresponding heaters via an intuitive web interface.</p>
                                        </div>
                                        <div className="2xl:py-8 py-4">
                                            <span className="about text-gray-300 text-xl">0{1}</span>
                                        </div>
                                        <div className="flex flex-row flex-wrap gap-3 justify-between">
                                            <div className="flex flex-col gap-1 items-start">
                                                <h2 className="text-custom sm:text-base text-sm font-semibold">Industry</h2>
                                                <p className="text-black sm:text-base text-sm font-semibold">Technology</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-start">
                                                <h2 className="text-custom sm:text-base text-sm font-semibold">Region</h2>
                                                <p className="text-black sm:text-base text-sm font-semibold">United States</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-start">
                                                <h2 className="text-custom sm:text-base text-sm font-semibold">Project Team</h2>
                                                <p className="text-black sm:text-base text-sm font-semibold">3 experts</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-start">
                                                <h2 className="text-custom sm:text-base text-sm font-semibold">Project Duration</h2>
                                                <p className="text-black sm:text-base text-sm font-semibold">Ongoing</p>
                                            </div>
                                        </div>
                                        <div className="pt-8">
                                            <button className="bg-custom text-white max-w-32 rounded-3xl sm:px-6 sm:py-2 px-4 py-1 font-medium sm:text-base text-sm leading-6 hover:brightness-110 transition">
                                                See more
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col basis-1/2 p-6">
                                        <img className="rounded-3xl min-w-64" src={require(".././images/case_Suter.webp")}alt='more'></img>
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