import React, {useState} from "react";
import { Specialization } from '.././utils/constants'


const Expertise = () => {

    const [hoveredItem, setHoveredItem] = useState<any>(null);

    return (
        <div className="flex flex-col text-white custom-px custom-max-w mx-auto" id="specialization">
            {Specialization.map((item, index) => (
                index % 2 === 0 && (
                    <div key={index} className="flex gap-5 pt-5">
                        <div className="group relative basis-1/2 rounded-3xl custom-bg overflow-hidden specialization" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                            <img className="absolute min-w-max min-h-max group-hover:-z-10 -bottom-3 right-0 scale-125" src={item.img} alt={item.title} />
                            <div className="absolute bottom-5 left-4">
                                <div className="flex flex-row items-center px-5 py-5">
                                    <h2 className="text-4xl font-base">{Specialization[index].title}</h2>
                                </div>
                                {hoveredItem === index ? <p className="text-lg duration-200 h-32 pl-5 w-10/12 opacity-100">{item.text}</p> : <p className="text-lg duration-200 h-0 pl-5 w-10/12 opacity-0"></p>}
                            </div>
                            <svg className={hoveredItem === index ? "duration-200 absolute bottom-9 right-8 rotate-0" : "duration-200 absolute bottom-9 right-8 rotate-90"} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                        </div>
                        {index + 1 < Specialization.length && (
                            <div className="group relative basis-1/2 rounded-3xl custom-bg overflow-hidden specialization" onMouseEnter={() => setHoveredItem(index + 1)} onMouseLeave={() => setHoveredItem(null)}>
                            <img className="absolute min-w-max min-h-max group-hover:-z-10" src={Specialization[index + 1].img} alt={Specialization[index + 1].title} />
                                <div className="absolute bottom-5 left-4">
                                    <div className="flex flex-row items-center px-5 py-5">
                                        <h2 className="text-4xl font-base">{Specialization[index + 1].title}</h2>
                                    </div>
                                    {hoveredItem === index + 1 ? <p className="text-lg duration-200 h-32 pl-5 w-10/12 opacity-100">{Specialization[index + 1].text}</p> : <p className="text-lg duration-200 h-0 pl-5 w-10/12 opacity-0"></p>}
                                </div>
                                <svg className={hoveredItem === index +1 ? "duration-200 absolute bottom-9 right-8 rotate-0" : "duration-200 absolute bottom-9 right-8 rotate-90"} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                            </div>
                        )}
                    </div>
                )
            ))}
        </div>
    )
}

export default Expertise