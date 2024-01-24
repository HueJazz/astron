import React from "react";
import { Abouts } from '.././utils/constants'

const About = () => {

    return(
        <div className="custom-px pt-5 custom-max-w mx-auto" id="about">
            <div className="flex justify-start gap-5">
                <div className="flex flex-col basis-2/3 bg-gray-200 rounded-3xl p-22">
                    <div className="w-1/2">
                        <div className="custom-text-color text-base">
                            About Us
                        </div>
                        <div className="text-4xl font-semibold">
                            WE ARE YOUR GLOBAL DEVELOPMENT PARTNER
                        </div>
                    </div>
                    <div className="self-end w-7/12 text-xl font-thin leading-6">
                        αstron, founded by Ivanna Petrova from Ukraine and her partner Dmitriy Zürcher, excels in sophisticated software development and the expansion of remote engineering services for global businesses. The company brings extensive expertise in software development and staff augmentation across diverse domains.
                        <br/><br/>Since its inception in 2016, our team has been instrumental in aiding companies in the IoT, Energy, FinTech, and Agriculture sectors in engineering, developing, designing, testing, securing, and delivering groundbreaking products. With the support of our adept recruitment team and access to a pool of over 180,000 skilled Ukrainian IT specialists, we stand out in providing organizations with dedicated engineers tailored to meet the unique requirements of each project.
                    </div>
                </div>
                <div className="basis-1/3 custom-bg text-white rounded-3xl p-12">
                    <h1 className="text-10xl custom-leading">+8</h1>
                    <p className="text-base mb-3">Years of experience</p>
                    <h1 className="text-10xl custom-leading">100%</h1>
                    <p className="text-base mb-3">Clients are ready to recommend us</p>
                </div>
            </div>
            <div className="pt-5 flex gap-5">
                {Abouts.map((item, index) => (
                    <div className="basis-1/3 p-9 rounded-3xl bg-white">
                        <div className="flex flex-col text-center px-2.5 py-2.5 gap-2 mb-3">
                            <h2 className="text-4xl font-semibold">{item.title}</h2>
                            <span className="py-4 about w-7/12 self-center text-gray-300 text-xl">0{index + 1}</span>
                            <p className="text-xl font-thin leading-7">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About