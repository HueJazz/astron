// #4E4E4E #717171

import React from "react";
import { Development } from '.././utils/constants'

const Technologies= () => {
    
    return (
        <div className="px-5 pt-5 max-w-custom mx-auto" id="technologies">
            <div className="flex gap-5 lg:flex-row flex-col">
                <div className="flex flex-col text-center justify-center basis-4/12 bg-blue-100 rounded-3xl py-6 px-12">
                    <h2 className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-semibold mb-4">TECHNOLOGY STACK</h2>
                    <p className="2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-7 leading-5">αstron stays abreast of the dynamic IT technology landscape and seamlessly adjusts to its evolution. Irrespective of the intricacy of our clients' project specifications, we are committed to addressing them. Whether it involves expertise at different levels or specific technology stacks for the positions they seek, we are ready to fulfill those needs.</p>
                </div>
                <div className="basis-8/12">
                    <ul className="flex sm:flex-col flex-row sm:justify-start justify-center gap-4 text-white">
                        {Development.map((development) =>
                            <li className="flex sm:flex-row flex-col gap-4">
                                <div className="flex basis-3/12 text-center py-2 lg:min-w-36 sm:min-w-24 min-w-16 sm:max-h-fit max-h-10 justify-center items-center bg-custom sm:rounded-2xl rounded-xl">
                                    <h1 className="lg:text-3xl 2xl:text-4xl sm:text-xl font-base">{development.name}</h1>
                                </div>
                                <ul className="w-full flex sm:flex-row flex-col items-center gap-4">
                                    {development.technologies.map((technology) => 
                                        <li className="w-[calc(20%-16px)] bg-gray-200 flex flex-row rounded-2xl justify-center">
                                            <img className="py-1 px-2 lg:max-h-24 2xl:max-w-28 lg:max-w-20 sm:max-h-16 sm:max-w-16 max-h-12 max-w-12" src={technology.img} alt={technology.name} />
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )}
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default Technologies