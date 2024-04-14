import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

const Reviews = () => {

    const numberOfSlides: number = 5

    return(
        <div className="px-5 pt-5 max-w-custom mx-auto" id="reviews">
            <div className="flex flex-col">
                <div className="2xl:p-12 p-6 mb-5 bg-custom rounded-3xl text-white">
                    <h2 className="lg:text-3xl 2xl:text-4xl sm:text-2xl py-2.5 font-semibold text-center">CUSTOMERS REVIEWS & PARTNERS</h2>
                    <p className="2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5 mx-auto text-center pb-5">Our biggest achievement is that all of our clients are ready to recommend us.
                        Check out some of their latest reviews.</p>
                </div>
                <div className="flex">
                    <Swiper
                        pagination={{
                            clickable: true,
                            renderBullet: function (index:number, className:string) {
                                return '<span class="' + className + '">' + '</span>';
                            }
                        }}
                        modules={[Pagination]}
                        slidesPerView={1}
                        autoplay={true}
                        spaceBetween={20}
                        grabCursor={true}
                        breakpoints={{
                            1536: {
                                slidesPerView: 3
                            },
                            1024: {
                                slidesPerView: 2
                            }
                        }}
                    >
                            {[...Array(numberOfSlides)].map(() => (
                                <SwiperSlide className="relative flex bg-gray-200 rounded-3xl">
                                    <div className="2xl:p-20 p-6">
                                        <div className="flex flex-col items-center pb-2.5 pt-1">
                                            <span className="absolute -top-36 -left-8 -z-10 text-gray-100 text-12xl font-semibold">02</span>
                                            <h1 className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-semibold">Linda Johnson</h1>
                                            <h2 className="sm:text-base text-sm text-custom font-semibold pt-1.5 sm:pb-8 pb-4">CEO - NebulaTech</h2>
                                            <p className="text-neutral-500 sm:text-base text-sm w-10/12 mx-auto text-center leading-5 mb-4">
                                                αstaron presented an exceptionally competitive offer, which we embraced. With their assistance, the product is now 
                                                ready for the market. Working with AstronTech has left us deeply impressed; a few noteworthy points include:
                                                Effortless and straightforward communication, direct access to the development team, and their ability 
                                                to precisely identify the right individuals for the project.
                                            </p>
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

export default Reviews