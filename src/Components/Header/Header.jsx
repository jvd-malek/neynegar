import React, { useState, useEffect, useContext } from 'react';
import routes from "../../Routes/Routes";
import Navbar from "./HeaderComponents/Navbar";
import NavLinks from "./HeaderComponents/NavLinks";
import { useRoutes } from 'react-router-dom';
import SideMenu from './HeaderComponents/SideMenu';

function Header() {

    const router = useRoutes(routes)
    const [offset, setOffset] = useState(0)
    const [isOpen, setOpen] = useState(false);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
    const [isSearchOpen, setSearchOpen] = useState(false)

    // if user scrolled this useEffect manage which navbar must show
    // and also manage the state of navbarlinks
    useEffect(() => {
        if (offset > 0) {
            setIsHeaderScrolled(true)
        } else {
            setIsHeaderScrolled(false)
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
        setOpen(false)
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
        <div className={(router.props.match.pathname !== '/login' && router.props.match.pathname !== '/register') ? '' : 'hidden'}>

            <Navbar
                isOpen={isOpen}
                isHeaderScrolled={isHeaderScrolled}
                setOpen={setOpen}
                isDark={isDark}
            />

            <NavLinks isOpen={isOpen} setOpen={setOpen} setDark={setDark} />

            <SideMenu setDark={setDark} isSearchOpen={isSearchOpen} setSearchOpen={setSearchOpen} />

        </div>
    );
}

export default Header;