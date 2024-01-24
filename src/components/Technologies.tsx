// #4E4E4E #717171

import React from "react";
import { Development } from '.././utils/constants'

const Technologies= () => {
    
    return (
        <div className="custom-px pt-5 custom-max-w mx-auto" id="technologies">
            <div className="flex gap-5">
                <div className="flex flex-col text-center justify-center basis-4/12 bg-blue-100 rounded-3xl py-4 px-12">
                    <h2 className="text-4xl font-semibold pb-7 pt-4">TECHNOLOGY STACK</h2>
                    <p className="text-xl font-thin">αstron stays abreast of the dynamic IT technology landscape and seamlessly adjusts to its evolution. Irrespective of the intricacy of our clients' project specifications, we are committed to addressing them. Whether it involves expertise at different levels or specific technology stacks for the positions they seek, we are ready to fulfill those needs.</p>
                </div>
                <div className="basis-8/12">
                    <ul className="flex flex-col gap-5 text-white">
                        {Development.map((development) =>
                            <li className="flex flex-rowjustify-end gap-5">
                                <div className="flex basis-2/12 text-center py-2 min-w-40 justify-center items-center custom-bg rounded-3xl">
                                    <h1 className="text-4xl font-base">{development.name}</h1>
                                </div>
                                <ul className="basis-10/12 flex flex-row gap-3">
                                    {development.technologies.map((technology) => 
                                        <li className="basis-1/6 bg-gray-200 flex flex-row gap-5 rounded-3xl justify-center">
                                            <img className="py-3 px-5 max-h-28" src={technology.img} alt={technology.name} />
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