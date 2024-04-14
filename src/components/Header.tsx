import React from 'react'
import { useState } from 'react'
import { Link } from "react-scroll";
import { Menu } from '.././utils/constants'

const Header = () => {

    const [hoveredItem, setHoveredItem] = useState<any>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('En')
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    
    return (
        <div className="absolute z-10 w-full">
            <div className="relative flex lg:justify-between justify-center max-w-custom mx-auto items-center px-5 lg:py-2.5 py-5">
                <div className="lg:w-fit text-center">
                    <Link to="banner" spy={true} smooth={true} offset={-88} duration={750}>
                        <p className="cursor-pointer text-5xl text-white font-semibold tracking-tighter scale-90 pb-3">αstron</p>
                    </Link>
                </div>
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition"
                    onClick={() => {setMenuOpen(false); document.body.style.overflow = 'auto'}}
                    style={{ visibility: menuOpen ? 'visible' : 'hidden', opacity: menuOpen ? 1 : 0 }}>
                </div>
                <div className={`fixed top-0 left-0 sm:w-64 w-screen h-full bg-custom text-white z-50 transition transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    style={{ overflowY: menuOpen ? 'auto' : 'hidden' }}>                   
                    <ul className="flex flex-col gap-5 my-5 overflow-auto">
                        <li className="sm:hidden flex flex-row justify-between mx-6 items-center">
                          <p className="text-5xl text-white font-semibold tracking-tighter scale-90 pb-3">αstron</p>
                          <svg className="fill-white h-8 w-8 cursor-pointer" onClick={() => {setMenuOpen(false); document.body.style.overflow = 'auto'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </li>
                        {Menu.map((item, index) => (
                            <li key={item.link} className="py-2 mx-6 text-white cursor-pointer border-b border-white">
                                <Link className="text-lg flex flex-row justify-between items-center" to={item.link} spy={true} smooth={true} offset={-88} duration={750} 
                                    onClick={() => {setMenuOpen(false); document.body.style.overflow = 'auto'}}
                                >
                                    {item.name}
                                    <svg className="sm:hidden max-h-4 transition rotate-90" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cursor-pointer absolute lg:hidden visible right-6" onClick={() => {setMenuOpen(true); document.body.style.overflow = 'hidden'}}>
                    <svg className="fill-white h-6 w-6 hover:brightness-[0.8]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
                <div className="lg:flex items-center hidden">
                    <div className="py-2.5 leading-6">
                        <ul className="flex items-center">
                            {Menu.map((item, index) => (
                                <li className="py-4 xl:px-6 px-3" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                                    {!item.more ? (
                                        <Link to={item.link} spy={true} smooth={true} offset={-88} duration={750} key={item.link} className="transition text-white cursor-pointer hover:brightness-75">
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <div className="group relative">
                                            <Link to={item.link} spy={true} smooth={true} offset={-88} duration={750} key={item.link} className="flex items-center text-white cursor-pointer group-hover:brightness-75">
                                                {item.name}
                                                <img alt="Arrow" className={hoveredItem === index ? "transition max-h-5 max-w-5 -rotate-180" : "transition max-h-5 max-w-5 "} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVR4nO2PQQqAIBBFa9FZ25QFXSR3HTZ6IVlINFA24GYeiIv5/jdWlWEYZQEajYz0sAfWcL/IdDmCkYMNcA9zF2eBIUdQA3MiuUqANilfQvazQJKgVX6T+ERylvvf5cJPdDYXJFM8uuWGUZYd/E6/69UyskUAAAAASUVORK5CYII=" />
                                            </Link>
                                            {hoveredItem === index && (
                                                <ul className="min-w-max absolute text-sm text-white mt-3 bg-custom rounded-3xl px-1 py-0.5 -left-5 shadow-xl">
                                                    {item.more?.map((subitem, subindex) => (
                                                        <li className="flex flex-row text-base flex-nowrap gap-2 items-center px-2 cursor-pointer transition" key={subindex}>
                                                            <svg className="max-w-3 fill-white rotate-90" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path d="M40 2L40 40M40 2L2 2M40 2L2 40" stroke="#F9F9F9" strokeWidth="3"></path></svg>
                                                            <h1 className="hover:underline underline-offset-2">{subitem}</h1>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                            <ul className="flex flex-row bg-gray-200 bg-opacity-20 rounded-3xl mx-5 px-2 py-1 text-white">
                                <li className={`cursor-pointer hover:brightness-[.80] rounded-3xl transition ${selectedLanguage === "En" ? "bg-custom" : ""}`} onClick={() => { setSelectedLanguage("En") }}>
                                    <p className="p-1.5 leading-4">En</p>
                                </li>
                                <li className={`cursor-pointer hover:brightness-[.80] rounded-3xl transition ${selectedLanguage === "De" ? "bg-custom" : ""}`} onClick={() => { setSelectedLanguage("De") }}>
                                    <p className="p-1.5 leading-4">De</p>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <Link to="contact" spy={true} smooth={true} duration={750} key="contact">
                        <button className="bg-custom text-white rounded-3xl xl:px-6 px-3 py-1.5 font-medium hover:brightness-110 transition">
                            Get in touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header