import React, {useState} from 'react'

const Services = () => {

    const[showDedicated, setShowDedicated] = useState<boolean>(false)
    const[showCTO, setShowCTO] = useState<boolean>(false)

    return (
        <div className="custom-px custom-max-w mx-auto pt-5" id="services">
            <div className="flex bg-blue-100 rounded-3xl p-22">
                <div className="flex px-2.5 py-2.5 gap-40">
                    <div className="flex flex-col basis-1/2">
                        <div className="w-1/2">
                            <div className="text-4xl font-semibold">
                                WHAT WE DO
                            </div>
                        </div>
                        <div className="self-end w-8/12 text-xl font-thin leading-6">
                            αstron excels in the realms of software development, engineering, and crafting tailored solutions. Our proficiency has matured over years of dedicated commitment, focusing on creating bespoke software solutions and supporting our clients in their own development endeavors.
                            Whether it's software development, UI/UX design, staff augmentation, QA, or cybersecurity across various domains, we stand ready to contribute to the success of your business. Delve deeper to discover the unique advantages that await you.
                        </div>
                    </div>
                    <ul className="text-4xl font-normal flex flex-col basis-1/2">
                        <li className="border-b border-black">
                            <div className="cursor-pointer flex justify-between items-center" onClick={()=>{setShowDedicated(!showDedicated); setShowCTO(false)}}>
                                <h1 className="py-6 pl-4">Dedicated Development Teams</h1>
                                <svg className={showDedicated ? "duration-200 -rotate-90" : "duration-200"} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M43 43L0.999999 43M43 43L43 1.00001M43 43L1 1.00001" stroke="#333333" stroke-width="2"></path></svg>
                            </div>
                            {showDedicated ? <p className="duration-200 h-20 text-lg pl-4 overflow-hidden">Expand your development capabilities, minimize time-to-market, enhance technological proficiency, and streamline expenses with αstaron.
                                <span className="cursor-pointer text-blue-600"> Details</span></p> 
                                : <p className="duration-200 h-0 text-transparent text-lg pl-4"></p>}
                        </li>
                        <li className="border-b border-black">
                            <div className="cursor-pointer flex justify-between items-center" onClick={()=>{setShowCTO(!showCTO); setShowDedicated(false)}}>
                                <h1 className="py-6 pl-4">CTO as a Service</h1>
                                <svg className={showCTO ? "duration-200 -rotate-90" : "duration-200"} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M43 43L0.999999 43M43 43L43 1.00001M43 43L1 1.00001" stroke="#333333" stroke-width="2"></path></svg>
                            </div>
                            {showCTO ? <p className="duration-200 h-28 text-lg pl-4 overflow-hidden">Articulate and craft an effective product strategy, select a technological framework, establish and oversee a team, define achievable objectives, and manage their successful implementation.
                                <span className="cursor-pointer text-blue-600"> Details</span></p> 
                                : <p className="duration-200 h-0 text-transparent text-lg pl-4"></p>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Services