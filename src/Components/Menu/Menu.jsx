import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { language } from '../../Contexts/lang';
import { IoLanguage } from "react-icons/io5";


function Menu({ isMenuOpen, setMenuOpen }) {

    const enLinks = [
        { id: 1, txt: 'Home', path: '/', translate: "translate-x-[29.1rem]" },
        { id: 2, txt: 'Services', path: '/services', translate: "translate-x-[26.2rem]" },
        { id: 3, txt: 'Dietary articles', path: '/dietary-articles', translate: "translate-x-[22.2rem]" },
        { id: 4, txt: 'Athletic articles', path: '/athletic-articles', translate: "translate-x-[15.2rem]" }
    ]
    const faLinks = [
        { id: 4, txt: 'مقالات ورزشی', path: '/athletic-articles', translate: '-translate-x-[10.5rem]' },
        { id: 3, txt: ' مقالات تغذیه ای', path: '/dietary-articles', translate: '-translate-x-[14.5rem]' },
        { id: 2, txt: 'خدمات', path: '/services', translate: '-translate-x-[18.5rem]' },
        { id: 1, txt: 'خانه', path: '/', translate: '-translate-x-[20.5rem]' }
    ]
    const lang = useContext(language)
    let links

    if (lang[0] == 'en') {
        links = enLinks
    } else {
        links = faLinks
    }

    const langHandler = e => {
        if (e.target.innerHTML === 'English') {
            lang[1]('en')
            setMenuOpen(false)
        } else {
            lang[1]('fa')
            setMenuOpen(false)
        }
    }

    return (
        <>
            <div className={
                isMenuOpen ?
                    "fixed left-0 top-0 w-[100%] h-[100vh] z-10 box border-none rounded-none transition-all duration-300 ease-in" :
                    "fixed left-0 top-0 w-[100%] h-[100vh] z-10 box rounded-none opacity-0 invisible transition-all ease-in"
            }
                onClick={() => setMenuOpen(false)}>
                <div className={
                    isMenuOpen ?
                        " absolute flex flex-col-reverse pb-6 items-center bottom-0 w-full transition-all duration-300 ease-in gap-10" :
                        " absolute flex flex-col-reverse items-center -bottom-full w-full transition-all ease-in"
                }>

                    <NavLink to={'/login'}
                        className='bg-white rounded-xl h-12 text-black  transition-all hover:text-3xl hover:transition-all hover:duration-500 sm:w-1/2 w-2/3 py-[6px] text-2xl text-center'
                        onClick={() => setMenuOpen(false)}>
                        sign in
                    </NavLink>

                    <div className="flex flex-col gap-3 w-full items-center text-center">

                        <div className="sm:w-1/2 w-2/3 mx-auto grid grid-rows-1 grid-cols-5 gap-2">
                            <div className="col-start-1 bg-white rounded-xl py-[6px] text-2xl w-full flex justify-center items-center">
                                <IoLanguage />
                            </div>
                            <span className="box bg-[rgba(200,200,200,0.25)] hover:bg-white hover:text-black transition-all hover:transition-all hover:duration-500 text-white py-[6px] text-2xl col-start-2 col-end-4 w-full cursor-pointer"
                                onClick={e => langHandler(e)}>Fasi</span>
                            <span className="box bg-[rgba(200,200,200,0.25)] hover:bg-white hover:text-black transition-all hover:transition-all hover:duration-500 text-white py-[6px] text-2xl col-start-4 col-end-6 w-full cursor-pointer"
                                onClick={e => langHandler(e)}>English</span>
                        </div>

                        {links.map(link => (
                            <NavLink to={link.path}
                                key={link.id}
                                className='box bg-[rgba(200,200,200,0.25)] hover:bg-white hover:text-black transition-all hover:transition-all hover:duration-500 text-white sm:w-1/2 w-2/3 py-[6px] text-2xl'
                                onClick={() => setMenuOpen(false)}>
                                {link.txt}
                            </NavLink>
                        ))}

                    </div>

                </div>
            </div>
        </>
    );
}

export default Menu;