import React from "react";
import { useState } from 'react'

const Contact = () => {

    const [isFullNameFocused, setIsFullNameFocused] = useState<any>(false);
    const [isEmailFocused, setIsEmailFocused] = useState<any>(false);
    const [isSubjectFocused, setIsSubjectFocused] = useState<any>(false);
    const [isMessageFocused, setIsMessageFocused] = useState<any>(false);

    return(
        <div className="px-5 pt-5 max-w-custom mx-auto" id="contact">
            <div className="flex lg:flex-row flex-col gap-5">
                <div className="basis-2/3 flex gap-11 lg:flex-row flex-col bg-gray-200 rounded-3xl 2xl:py-16 py-8 2xl:px-24 px-8">
                    <div className="basis-1/2 flex flex-col mt-1">
                        <div className="text-custom sm:text-base text-sm mt-1 leading-5">
                            Get in touch
                        </div>
                        <div className="lg:text-2xl 2xl:text-3xl sm:text-xl font-semibold">
                            DROP US MESSAGE TO SEE HOW WE CAN HELP
                        </div>
                        <p className="lg:text-base text-sm leading-5">Just enter your project details and we will reply within 24 hours</p>
                    </div>
                    <div className="flex lg:pt-6">
                        <form className="flex w-full flex-col">
                            <div className="group mb-4 relative">
                                <label className={`duration-200 sm:text-base text-sm absolute text-neutral-500 pointer-events-none ${isFullNameFocused ? 'text-sm bottom-full' : 'lg:text-lg bottom-6'}`}>Your Full Name *</label>
                                <input className="mb-2 h-10 w-full border-b border-y-sky-700 bg-gray-200 outline-0" type="text"
                                    onFocus={() => setIsFullNameFocused(true)}
                                    onBlur={(event) => setIsFullNameFocused(event.target.value)}>
                                </input>
                            </div>
                            <div className="group mb-4 relative">
                                <label className={`duration-200 sm:text-base text-sm absolute text-neutral-500 pointer-events-none ${isEmailFocused ? 'text-sm bottom-full' : 'lg:text-lg bottom-6'}`}>Your Email *</label>
                                <input className="mb-2 h-10 w-full border-b border-y-sky-700 bg-gray-200 outline-0" type="text"
                                    onFocus={() => setIsEmailFocused(true)}
                                    onBlur={(event) => setIsEmailFocused(event.target.value)}>
                                </input>
                            </div>
                            <div className="group mb-4 relative">
                                <label className={`duration-200 sm:text-base text-sm absolute text-neutral-500 pointer-events-none ${isSubjectFocused ? 'text-sm bottom-full' : 'lg:text-lg bottom-6'}`}>Message Subject *</label>
                                <input className="mb-2 h-10 w-full border-b border-y-sky-700 bg-gray-200 outline-0" type="text"
                                    onFocus={() => setIsSubjectFocused(true)}
                                    onBlur={(event) => setIsSubjectFocused(event.target.value)}>
                                </input>
                            </div>
                            <div className="group relative">
                                <label className={`duration-200 sm:text-base text-sm absolute text-neutral-500 pointer-events-none ${isMessageFocused ? 'text-sm bottom-full' : 'lg:text-lg bottom-6'}`}>
                                    Your Message *
                                </label>
                                <textarea
                                    className="mb-2 h-12 w-full border-b border-y-sky-700 bg-gray-200 outline-0 overscroll-auto resize-none"
                                    onFocus={() => setIsMessageFocused(true)}
                                    onBlur={(event) => setIsMessageFocused(event.target.value)}
                                ></textarea>
                            </div>
                            <div className="relative flex items-center mt-1 mb-4">
                                <input className="group h-4 w-4" type="checkbox"></input>
                                <label className="ml-2 text-sm text-gray-400">* I have read and accepted the Terms & Conditions and Privacy Policy</label>
                            </div>
                            <button className="bg-custom text-white rounded-3xl sm:text-base text-sm py-2 font-medium self-center w-1/2 text-nowrap mt-2 min-w-36 hover:brightness-110 transition">
                                Contact our team
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-row items-start basis-1/3 justify-around text-white bg-custom rounded-3xl sm:gap-12 gap-4 2xl:p-24 p-8">
                    <div className="flex flex-col justify-center gap-6">
                        <div className="2xl:text-xl lg:text-lg sm:text-base text-sm font-semibold">
                            <h2 className="mb-2">Email</h2>
                            <p>info@astron.com</p>
                        </div>
                        <div className="2xl:text-xl lg:text-lg sm:text-base text-sm font-semibold">
                            <h2 className="mb-2">Phone</h2>
                            <p>CH +41-55-789-1234</p>
                            <p>UA +380-66-543-2109</p>
                        </div>
                        <ul className="flex flex-row sm:gap-6 gap-2">
                            <li className="hover:brightness-[.80] cursor-pointer transition">
                                <svg className="lg:h-10 lg:w-10 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><circle cx="18.5" cy="18.5" r="18.5" fill="#F9F9F9"></circle><path d="M24.0956 23.3427C22.8388 24.392 21.2054 24.9776 19.4451 24.9776C15.4251 24.9776 12.5307 22.2934 12.5307 18.4421C12.5307 14.5908 15.4209 12.0206 19.4451 12.0206C21.2054 12.0206 22.8388 12.4883 24.0956 13.6555L24.9758 14.355L28.7461 10.8534L27.8659 10.036C25.4793 8.16931 22.5849 7.00213 19.4451 7.00213C12.281 6.88423 7 11.6709 7 18.4421C7 24.9776 12.4037 30 19.4451 30C22.7119 30 25.729 28.9507 28.1198 26.9661L29 26.1487L24.98 22.4153L24.0956 23.3427Z" fill="#306FBB"></path><path d="M19.1953 22.4072C21.4856 22.4072 23.3422 20.6829 23.3422 18.5559C23.3422 16.4289 21.4856 14.7046 19.1953 14.7046C16.905 14.7046 15.0483 16.4289 15.0483 18.5559C15.0483 20.6829 16.905 22.4072 19.1953 22.4072Z" fill="#306FBB"></path></svg>
                            </li>
                            <li className="hover:brightness-[.80] cursor-pointer transition">
                                <svg className="lg:h-10 lg:w-10 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><circle cx="18.5" cy="18.5" r="18.5" fill="#F9F9F9"></circle><path d="M24 14.05H19.981V11.7501C19.981 10.5633 20.0768 9.81576 21.763 9.81576H23.8928V6.15877C22.8564 6.05067 21.8143 5.99777 20.7711 6.00007C17.6779 6.00007 15.4204 7.90562 15.4204 11.4039V14.05H12V18.65L15.4204 18.6489V29H19.981V18.6466L23.4767 18.6454L24 14.05Z" fill="#306FBB"></path></svg>
                            </li>
                            <li className="hover:brightness-[.80] cursor-pointer transition">
                                <svg className="lg:h-10 lg:w-10 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><circle cx="18.5" cy="18.5" r="18.5" fill="#F9F9F9"></circle><path d="M11.3656 9C9.887 9 9 9.86798 9 11.0238C9 12.1796 9.8871 13.0442 11.2174 13.0442C12.696 13.0442 13.583 12.1796 13.583 11.0238C13.583 9.86798 12.6959 9 11.3656 9ZM9.11794 15.2062V27H13.4718V15.2062H9.11794ZM17.064 15.2062V27H21.4179V20.5536C21.4179 18.6345 22.82 18.3587 23.2409 18.3587C23.6619 18.3587 24.7877 18.771 24.7877 20.5536V27H29V20.5536C29 16.852 27.3156 15.2062 25.2089 15.2062C23.1023 15.2062 21.9786 15.8912 21.4179 16.8516V15.2062H17.064Z" fill="#306FBB"></path></svg>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                        <div className="2xl:text-xl lg:text-lg sm:text-base text-sm font-semibold">
                            <h2 className="mb-2">Address</h2>
                            <p>astron GmbH</p>
                            <p>Bergstrasse 15</p>
                            <p>7643 Oberwil</p>
                        </div>
                        <div className="2xl:text-xl lg:text-lg sm:text-base text-sm font-semibold">
                            <p>astron LLC</p>
                            <p>2/5 Shevchenko Street</p>
                            <p>Lviv, Ukraine 03148</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact