import React from "react";
import { Abouts } from '.././utils/constants'

const About = () => {

    return(
        <div className="px-5 pt-5 max-w-custom mx-auto" id="about">
            <div className="flex justify-start gap-5 lg:flex-row flex-col">
                <div className="flex flex-col basis-2/3 bg-gray-200 rounded-3xl 2xl:p-24 p-8">
                    <div className="w-1/2">
                        <div className="text-custom sm:text-base text-sm">
                            About Us
                        </div>
                        <div className="lg:text-3xl 2xl:text-4xl sm:text-xl font-semibold mb-2">
                            WE ARE YOUR GLOBAL DEVELOPMENT PARTNER
                        </div>
                    </div>
                    <div className="self-end lg:w-7/12 2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5">
                        αstron, founded by Ivanna Petrova from Ukraine and her partner Dmitriy Zürcher, excels in sophisticated software development and the expansion of remote engineering services for global businesses. The company brings extensive expertise in software development and staff augmentation across diverse domains.
                        <br/><br/>Since its inception in 2016, our team has been instrumental in aiding companies in the IoT, Energy, FinTech, and Agriculture sectors in engineering, developing, designing, testing, securing, and delivering groundbreaking products. With the support of our adept recruitment team and access to a pool of over 180,000 skilled Ukrainian IT specialists, we stand out in providing organizations with dedicated engineers tailored to meet the unique requirements of each project.
                    </div>
                </div>
                <div className="basis-1/3 flex lg:flex-col flex-row justify-around bg-custom text-white rounded-3xl gap-4 lg:p-12 p-6">
                    <div className="flex flex-col mb-2">
                        <h1 className="2xl:text-10xl lg:text-7xl sm:text-4xl text-2xl font-semibold">+8</h1>
                        <p className="2xl:text-xl sm:text-base text-sm">Years of experience</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="2xl:text-10xl lg:text-7xl sm:text-4xl text-2xl font-semibold">100%</h1>
                        <p className="2xl:text-xl sm:text-base text-sm ">Clients are ready to recommend us</p>
                    </div>
                </div>
            </div>
            <div className="pt-5 flex gap-5 lg:flex-row flex-col">
                {Abouts.map((item, index) => (
                    <div className="basis-1/3 2xl:p-9 p-6 rounded-3xl bg-white">
                        <div className="flex flex-col text-center gap-2 mb-3">
                            <h2 className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-semibold">{item.title}</h2>
                            <span className="lg:py-4 sm:py-1 about w-7/12 self-center text-gray-300 2xl:text-xl">0{index + 1}</span>
                            <p className="2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-7 leading-5">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About