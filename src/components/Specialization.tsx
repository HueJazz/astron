import React, {useState} from "react";
import { Specialization } from '.././utils/constants'


const Expertise = () => {

    const [hoveredItem, setHoveredItem] = useState<any>(null);

    return (
        <div className="flex flex-col text-white px-5 max-w-custom mx-auto" id="specialization">
            {Specialization.map((item, index) => (
                index % 2 === 0 && (
                    <div key={index} className="flex lg:flex-nowrap flex-wrap gap-5 pt-5">
                        <div className="group relative lg:basis-1/2 basis-full rounded-3xl bg-custom overflow-hidden lg:h-[40vh] lg:max-h-[350px]" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                            <img loading="lazy" className="absolute min-w-max min-h-max group-hover:-z-10 top-2 lg:right-0 left-0 scale-125" src={item.img} alt={item.title} />
                            <div className="flex flex-col lg:p-8 p-6 h-full justify-end">
                                <h2 className="relative lg:text-3xl 2xl:text-4xl sm:text-xl font-base lg:mb-2 mb-1 w-10/12">{Specialization[index].title}</h2>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                                    <div className="2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5 w-10/12 overflow-hidden">{item.text}</div>
                                </div>
                            </div>
                            <svg className={`2xl:max-h-10 lg:max-h-8 sm:max-h-6 max-h-4 absolute lg:bottom-10 bottom-7 right-8 transition ${hoveredItem === index ? "rotate-0" : "rotate-90"}`} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                        </div>
                        {index + 1 < Specialization.length && (
                            <div className="group relative lg:basis-1/2 basis-full rounded-3xl bg-custom overflow-hidden lg:h-[40vh] lg:max-h-[350px] h-auto" onMouseEnter={() => setHoveredItem(index + 1)} onMouseLeave={() => setHoveredItem(null)}>
                                <img loading="lazy" className="absolute min-w-max min-h-max left-0 top-0 group-hover:-z-10 lg:scale-100 scale-125" src={Specialization[index + 1].img} alt={Specialization[index + 1].title} />
                                <div className="flex flex-col lg:p-8 p-6 h-full justify-end">
                                    <h2 className="relative lg:text-3xl 2xl:text-4xl sm:text-xl font-base lg:mb-2 mb-1 w-10/12">{Specialization[index + 1].title}</h2>
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                                        <div className="2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5 w-10/12 overflow-hidden">{Specialization[index + 1].text}</div>
                                    </div>
                                </div>
                                <svg className={`2xl:max-h-10 lg:max-h-8 sm:max-h-6 max-h-4 absolute lg:bottom-10 bottom-7 right-8 transition ${hoveredItem === index + 1 ? "rotate-0" : "rotate-90"}`} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                            </div>
                        )}
                    </div>
                )
            ))}
        </div>
    )
}

export default Expertise