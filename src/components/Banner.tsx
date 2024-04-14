import React from 'react'
import { Link } from "react-scroll";

const Banner = () => {

    return (
        <div className="relative min-h-screen min-w-screen flex items-end overflow-hidden">
            <div className="absolute min-w-max min-h-max right-1/2 translate-x-1/2">
                <video className="brightness-75" muted loop autoPlay>
                    <source src={require(".././images/banner.mp4")} type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" />
                </video> 
            </div>
            <div className="relative bottom-0 lg:mb-32 sm:mb-24 mb-16 w-full">
                <div className="flex flex-row justify-between items-end max-w-custom mx-auto px-10 max-h-screen">
                    <div className="flex flex-col gap-6">
                        <h1 className="lg:text-6xl 2xl:text-8xl sm:text-3xl text-xl text-white font-semibold">Guardians of your digital realm</h1>
                        <p className="2xl:text-xl sm:text-base text-sm text-white w-8/12">Stay a Step Ahead of Cyber Threats with Revolutionary Cybersecurity Solutions from αstron. Safeguarding Your Data, One Click at a Time.</p>
                        <Link to="contact" spy={true} smooth={true} duration={750} key="contact">
                            <button className="sm:text-base text-sm transition bg-white rounded-3xl sm:px-6 sm:py-2 px-3 py-1 font-medium leading-6 hover:bg-custom hover:text-white">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                    <ul className="flex flex-col sm:gap-8 gap-4 fill-white transition">
                        <li className="hover:brightness-[.80] cursor-pointer transition">
                            <svg className="lg:h-10 lg:w-10 sm:w-8 sm:h-8 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><circle cx="18.5" cy="18.5" r="18.5" fill="#F9F9F9"></circle><path d="M24.0956 23.3427C22.8388 24.392 21.2054 24.9776 19.4451 24.9776C15.4251 24.9776 12.5307 22.2934 12.5307 18.4421C12.5307 14.5908 15.4209 12.0206 19.4451 12.0206C21.2054 12.0206 22.8388 12.4883 24.0956 13.6555L24.9758 14.355L28.7461 10.8534L27.8659 10.036C25.4793 8.16931 22.5849 7.00213 19.4451 7.00213C12.281 6.88423 7 11.6709 7 18.4421C7 24.9776 12.4037 30 19.4451 30C22.7119 30 25.729 28.9507 28.1198 26.9661L29 26.1487L24.98 22.4153L24.0956 23.3427Z" fill="#306FBB"></path><path d="M19.1953 22.4072C21.4856 22.4072 23.3422 20.6829 23.3422 18.5559C23.3422 16.4289 21.4856 14.7046 19.1953 14.7046C16.905 14.7046 15.0483 16.4289 15.0483 18.5559C15.0483 20.6829 16.905 22.4072 19.1953 22.4072Z" fill="#306FBB"></path></svg>
                        </li>
                        <li className="hover:brightness-[.80] cursor-pointer transition">
                            <svg className="lg:h-10 lg:w-10 sm:w-8 sm:h-8 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><circle cx="18.5" cy="18.5" r="18.5" fill="#F9F9F9"></circle><path d="M24 14.05H19.981V11.7501C19.981 10.5633 20.0768 9.81576 21.763 9.81576H23.8928V6.15877C22.8564 6.05067 21.8143 5.99777 20.7711 6.00007C17.6779 6.00007 15.4204 7.90562 15.4204 11.4039V14.05H12V18.65L15.4204 18.6489V29H19.981V18.6466L23.4767 18.6454L24 14.05Z" fill="#306FBB"></path></svg>
                        </li>
                        <li className="hover:brightness-[.80] cursor-pointer transition">
                            <svg className="lg:h-10 lg:w-10 sm:w-8 sm:h-8 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none"><circle cx="18.5" cy="18.5" r="18.5" fill="#F9F9F9"></circle><path d="M11.3656 9C9.887 9 9 9.86798 9 11.0238C9 12.1796 9.8871 13.0442 11.2174 13.0442C12.696 13.0442 13.583 12.1796 13.583 11.0238C13.583 9.86798 12.6959 9 11.3656 9ZM9.11794 15.2062V27H13.4718V15.2062H9.11794ZM17.064 15.2062V27H21.4179V20.5536C21.4179 18.6345 22.82 18.3587 23.2409 18.3587C23.6619 18.3587 24.7877 18.771 24.7877 20.5536V27H29V20.5536C29 16.852 27.3156 15.2062 25.2089 15.2062C23.1023 15.2062 21.9786 15.8912 21.4179 16.8516V15.2062H17.064Z" fill="#306FBB"></path></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner