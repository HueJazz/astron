import React from 'react'
import { useState } from 'react'
import { Link } from "react-scroll";
import { Menu } from '.././utils/constants'

const Header = () => {

    const [hoveredItem, setHoveredItem] = useState<any>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('En')

    return (
        <div className="relative z-10 text-black">
            <div className="duration-200 flex justify-between items-center custom-max-w mx-auto py-2.5 pl-3">
                <div className="cursor-pointer pt-1">
                    <Link to="banner" spy={true} smooth={true} offset={-88} duration={750}>
                        <p className="text-5xl font-semibold tracking-tighter scale-90 ml-1 pb-3">αstron</p>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="py-2.5 custom-size leading-6">
                        <ul className="flex items-start">
                            {Menu.map((item, index) => (
                                <li className="custom-p" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                                    {!item.more ? (
                                        <Link to={item.link} spy={true} smooth={true} offset={-88} duration={750} key={item.link} className="duration-200 cursor-pointer hover:text-blue-800">
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <div className="group relative">
                                            <Link to={item.link} spy={true} smooth={true} offset={-88} duration={750} key={item.link} className="flex items-center cursor-pointer hover:text-blue-800">
                                                {item.name} <img alt="Arrow" className={hoveredItem === index ? "duration-200 brightness-50 max-h-5 max-w-5 -rotate-180":"duration-200 brightness-50 max-h-5 max-w-5 "} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVR4nO2PQQqAIBBFa9FZ25QFXSR3HTZ6IVlINFA24GYeiIv5/jdWlWEYZQEajYz0sAfWcL/IdDmCkYMNcA9zF2eBIUdQA3MiuUqANilfQvazQJKgVX6T+ERylvvf5cJPdDYXJFM8uuWGUZYd/E6/69UyskUAAAAASUVORK5CYII=" />
                                            </Link>
                                            {hoveredItem === index && (
                                                <ul className="min-w-max absolute text-sm text-white mt-3 custom-bg rounded-3xl px-1 py-0.5 -left-5 shadow-xl">
                                                    {item.more?.map((subitem, subindex) => (
                                                        <li className="flex flex-row flex-nowrap gap-2 items-center px-2 cursor-pointer duration-200" key={subindex}>
                                                            <svg className="max-w-3 rotate-90" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                                                            <h1 className="hover:underline underline-offset-2">{subitem}</h1>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                            <ul className="flex flex-row bg-gray-200 rounded-3xl custom-m p-1.5">
                                <li className={selectedLanguage === "En" ? "custom-bg rounded-3xl text-white cursor-pointer" : "cursor-pointer"} onClick={() => {setSelectedLanguage("En")}}>
                                    <p className="p-1.5 leading-4">En</p>
                                </li>
                                <li className={selectedLanguage === "De" ? "custom-bg rounded-3xl text-white cursor-pointer" : "cursor-pointer"} onClick={() => {setSelectedLanguage("De")}}>
                                    <p className="p-1.5 leading-4">De</p>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <Link to="contact" spy={true} smooth={true} duration={750} key="contact" className="duration-300 custom-px">
                        <button className="custom-bg custom-size text-white rounded-3xl px-6 py-1.5 font-medium"> 
                            Get in touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header