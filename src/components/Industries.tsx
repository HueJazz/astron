import React from "react";
import { Businesses } from '.././utils/constants'

const Industries = () => {

    return(
        <div className="px-5 pt-5 max-w-custom mx-auto" id="about">
            <div className="flex justify-start items-stretch bg-custom rounded-3xl lg:flex-row flex-col">
                <div className="flex flex-col basis-7/12 rounded-3xl text-white 2xl:p-24 p-8">
                    <div className="lg:w-1/2">
                        <div className="lg:text-3xl 2xl:text-4xl sm:text-2xl font-semibold mb-2">
                            INDUSTRIES WE SERVE
                        </div>
                    </div>
                    <div className="self-end lg:w-7/12 2xl:text-xl sm:text-base text-sm font-thin 2xl:leading-6 leading-5">
                        Throughout our years of experience, αstron has conceptualized, designed, developed, engineered, and successfully delivered numerous projects spanning various domains and businesses. If your specific domain is not mentioned among the listed ones, feel free to reach out to us. We invite you to inquire about our industry case studies and engage in discussions about your unique project.
                    </div>
                </div>
                <div className="flex 2xl:basis-5/12 basis-7/12 sm:p-6 p-3">
                    <ul className="2xl:p-12 sm:p-6 p-2 flex flex-row flex-wrap bg-white rounded-3xl 2xl:text-xl sm:text-base text-sm font-semibold">
                        {Businesses.map((business) => 
                            <li className="flex flex-row lg:gap-5 gap-2 sm:py-2 py-1 items-center justify-start basis-1/2 p-1">
                                <svg className="sm:min-w-5 w-3 min-w-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="8.99927" r="8.5" fill="#333333"></circle><path d="M9 0V18" stroke="white" stroke-width="2.3"></path><path d="M0 9L18 9" stroke="white" stroke-width="2.3"></path></svg>
                                <h1 className="xl:text-lg lg:text-base text-sm sm:leading-5 leading-4">{business.title}</h1>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Industries