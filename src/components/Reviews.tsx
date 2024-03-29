import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

const Reviews = () => {

    const numberOfSlides: number = 5

    return(
        <div className="custom-px pt-5 custom-max-w mx-auto" id="reviews">
            <div className="flex flex-col">
                <div className="py-5 mb-5 custom-bg rounded-3xl text-white">
                    <h2 className="text-4xl py-2.5 font-semibold text-center">CUSTOMERS REVIEWS & PARTNERS</h2>
                    <p className="text-xl font-thin mx-auto text-center pb-5">Our biggest achievement is that all of our clients are ready to recommend us.
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
                        slidesPerView={3}
                        autoplay={true}
                        spaceBetween={20}
                        grabCursor={true}
                    >
                            {[...Array(numberOfSlides)].map(() => (
                                <SwiperSlide className="flex bg-gray-200 rounded-3xl">
                                    <div className="relative pt-20 pb-14">
                                        <div className="flex flex-col items-center pb-2.5 pt-1">
                                            <span className="absolute top-0 -left-8 -z-10 text-gray-100 text-12xl">02</span>
                                            <h1 className="text-4xl font-semibold">Linda Johnson</h1>
                                            <h2 className="custom-size custom-text-color font-semibold pt-1.5 pb-8">CEO - NebulaTech</h2>
                                            <p className="text-neutral-500 w-10/12 mx-auto text-center custom-size leading-5 mb-4">
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