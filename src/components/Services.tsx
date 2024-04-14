import React, {useState} from 'react'

const Services = () => {

    const[showDedicated, setShowDedicated] = useState<boolean>(false)
    const[showCTO, setShowCTO] = useState<boolean>(false)

    return (
        <div className="px-5 max-w-custom mx-auto pt-5" id="services">
            <div className="flex bg-blue-100 rounded-3xl 2xl:p-24 p-8">
                <div className="flex lg:flex-row flex-col px-2.5 py-2.5 2xl:gap-40 gap-5">
                    <div className="flex flex-col basis-1/2">
                        <div className="w-1/2">
                            <div className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-semibold mb-2">
                                WHAT WE DO
                            </div>
                        </div>
                        <div className="self-end lg:w-8/12 2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5">
                            αstron excels in the realms of software development, engineering, and crafting tailored solutions. Our proficiency has matured over years of dedicated commitment, focusing on creating bespoke software solutions and supporting our clients in their own development endeavors.
                            Whether it's software development, UI/UX design, staff augmentation, QA, or cybersecurity across various domains, we stand ready to contribute to the success of your business. Delve deeper to discover the unique advantages that await you.
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/2">
                        <div className="cursor-pointer flex justify-between items-center" onClick={()=>{setShowDedicated(!showDedicated); setShowCTO(false)}}>
                            <h1 className="lg:text-3xl 2xl:text-4xl sm:text-xl 2xl:py-4 py-2 pl-4">Dedicated Development Teams</h1>
                            <svg className={`2xl:max-h-10 lg:max-h-8 sm:max-h-6 max-h-4 transition ${showDedicated ? "-rotate-90" : ""}`} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M43 43L0.999999 43M43 43L43 1.00001M43 43L1 1.00001" stroke="#333333" stroke-width="2"></path></svg>
                        </div>
                        <div className={`border-b border-black pl-4 grid grid-rows-[0fr] transition-all ${showDedicated ? "grid-rows-[1fr]": ""}`}>
                            <div className={`sm:text-base text-sm lg:mb-4 mb-1 overflow-hidden`}>Expand your development capabilities, minimize time-to-market, enhance technological proficiency, and expenses with αstaron.
                                <span className="cursor-pointer text-blue-600"> Details</span>
                            </div>
                        </div>
                        <div className="cursor-pointer flex justify-between items-center" onClick={()=>{setShowCTO(!showCTO); setShowDedicated(false)}}>
                            <h1 className="lg:text-3xl 2xl:text-4xl sm:text-xl 2xl:py-4 py-2 pl-4">CTO as a Service</h1>
                            <svg className={`2xl:max-h-10 lg:max-h-8 sm:max-h-6 max-h-4 transition ${showCTO ? "-rotate-90" : ""}`} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M43 43L0.999999 43M43 43L43 1.00001M43 43L1 1.00001" stroke="#333333" stroke-width="2"></path></svg>
                        </div>
                        <div className={`border-b border-black pl-4 grid grid-rows-[0fr] transition-all ${showCTO ? "grid-rows-[1fr]": ""}`}>
                            <div className={`sm:text-base text-sm lg:mb-4 mb-1 overflow-hidden`}>Articulate and craft an effective product strategy, select a technological framework, establish and oversee a team, define achievable objectives, and manage their successful implementation.
                                <span className="cursor-pointer text-blue-600"> Details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Services