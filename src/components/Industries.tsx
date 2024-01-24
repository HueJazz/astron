import React from "react";
import { Businesses } from '.././utils/constants'

const Industries = () => {

    return(
        <div className="custom-px pt-5 custom-max-w mx-auto" id="about">
            <div className="flex justify-start items-stretch gap-6 custom-bg rounded-3xl">
                <div className="flex flex-col basis-7/12 rounded-3xl text-white p-22">
                    <div className="w-1/2">
                        <div className="text-4xl font-semibold">
                            INDUSTRIES WE SERVE
                        </div>
                    </div>
                    <div className="self-end w-7/12 text-xl font-thin leading-6">
                        Throughout our years of experience, αstron has conceptualized, designed, developed, engineered, and successfully delivered numerous projects spanning various domains and businesses. If your specific domain is not mentioned among the listed ones, feel free to reach out to us. We invite you to inquire about our industry case studies and engage in discussions about your unique project.
                    </div>
                </div>
                <div className="flex basis-5/12 p-6">
                    <ul className="py-10 px-2 flex flex-row flex-wrap text justify-around bg-white rounded-3xl text-xl font-semibold">
                        {Businesses.map((business) => 
                            <li className="flex flex-row gap-5 items-center justify-start basis-1/2 max-w-56 leading-6">
                                <svg className="min-w-5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="8.99927" r="8.5" fill="#333333"></circle><path d="M9 0V18" stroke="white" stroke-width="2.3"></path><path d="M0 9L18 9" stroke="white" stroke-width="2.3"></path></svg>
                                <h1 className="">{business.title}</h1>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Industries