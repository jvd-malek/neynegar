import React, { useState, useEffect, useContext } from 'react';
import routes from "../../Routes/Routes";
import Navbar from "./HeaderComponents/Navbar";
import NavLinks from "./HeaderComponents/NavLinks";
import { useRoutes } from 'react-router-dom';
import SideMenu from './HeaderComponents/SideMenu';

function Header() {

    const router = useRoutes(routes)
    const [offset, setOffset] = useState(0)
    const [isOpenFirst, setOpenFirst] = useState(false);
    const [isOpenSecond, setOpenSecond] = useState(false);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
    const [isSearchOpen, setSearchOpen] = useState(false)

    // if user scrolled this useEffect manage which navbar must show
    // and also manage the state of navbarlinks
    useEffect(() => {
        if (offset > 0) {
            if (isOpenFirst) {
                setOpenSecond(true)
            }
            setIsHeaderScrolled(true)
            setOpenFirst(false)
        } else {
            if (!isOpenSecond) {
                setIsHeaderScrolled(false)
            }
        }
    }, [offset])

    useEffect(() => {
        // onScroll will set the current vertical position in offset state
        window.addEventListener('scroll', () => setOffset(window.scrollY))
        return window.removeEventListener('scroll', () => setOffset(window.scrollY))
    }, [])

    // when navbarLinks is open and user change it's devices orientation
    // orientationHandler will close the navbarLinks
    const orientationHandler = () => {
        setOpenFirst(false)
        setOpenSecond(false)
        setSearchOpen(false)
    }

    useEffect(() => {
        // orientationchange will set the current window.innerWidth when orientation change
        window.addEventListener('orientationchange', () => orientationHandler())
        return window.removeEventListener('orientationchange', () => orientationHandler())
    }, [])

    // managimg darkMode
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('dark')))

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            localStorage.setItem("dark", true)
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem("dark", false)
        }
    }, [isDark])

    return (
        <div className={(router.props.match.pathname !== '/login' && router.props.match.pathname !== '/signup') ? '': 'hidden'}>

            {/* this navbar is for top=0 */}
            {/* second navbar is hidden */}
            <Navbar
                isOpenFirst={isOpenFirst}
                isHeaderScrolled={isHeaderScrolled}
                setOpenFirst={setOpenFirst}
                isFixed={false}
                isDark={isDark}
            >
                <NavLinks isOpen={isOpenFirst} setOpen={setOpenFirst} setDark={setDark}/>
            </Navbar>

            {/* this navbar is for when screen is scrolled */}
            {/* first navbar opacity=0 */}
            <Navbar
                isOpenSecond={isOpenSecond}
                isHeaderScrolled={isHeaderScrolled}
                setOpenSecond={setOpenSecond}
                isFixed={true}
            >
                <NavLinks isOpen={isOpenSecond} setOpen={setOpenSecond} setDark={setDark}/>
            </Navbar>

            <SideMenu setDark={setDark} isSearchOpen={isSearchOpen} setSearchOpen={setSearchOpen}/>
            
        </div>
    );
}

export default Header;