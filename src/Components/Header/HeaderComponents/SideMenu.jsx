import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


function SideMenu({ setDark, isSearchOpen, setSearchOpen }) {
    const [search, setSearch] = useState('')
    const [mount, setMount] = useState(false)
    const searchInput = useRef()
    useEffect(() => {
        setMount(true)
    }, [])

    const searchHandler = e => {
        setSearch(e.target.value)
    }
    const submitHandler = () => {
    }
    const btnSearchHandler = () => {
        if (isSearchOpen) {
            submitHandler()
        } else {
            setTimeout(() => {
                searchInput.current.focus()
            }, 500);
        }
        setSearchOpen(!isSearchOpen)
    }
    return (
        <div className={`fixed right-5 bottom-5 lg:flex flex-col gap-3 hidden z-10 ${isSearchOpen && "z-50"}`}>
            <Link
                to={'/basket'}
                className={`bg-sky-300 rounded-full w-fit z-20 shadow-cs transition-all duration-[225ms] ${mount ? "translate-x-0" : 'translate-x-6'}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <IconButton>
                    <LocalMallRoundedIcon />
                </IconButton>
            </Link>
            <div className={`bg-sky-300 rounded-full dark:hidden w-fit shadow-cs transition-all duration-150 ${mount ? "translate-x-0" : 'translate-x-6'}`}>
                <IconButton onClick={() => setDark(true)}>
                    <DarkModeRoundedIcon />
                </IconButton>
            </div>
            <div className={`bg-sky-300 rounded-full hidden dark:block w-fit shadow-cs transition-all duration-150 ${mount ? "translate-x-0" : 'translate-x-6'}`}>
                <IconButton onClick={() => setDark(false)}>
                    <WbSunnyRoundedIcon />
                </IconButton>
            </div>

            <div className={`z-50 bg-sky-300 transition-all overflow-hidden flex items-center ${mount ? "translate-x-0 " : 'translate-x-6 '} ${isSearchOpen ? "w-full rounded-r-3xl rounded-l-md duration-500 shadow-css" : ' shadow-cs w-10 rounded-full'}`}>
                <IconButton onClick={() => btnSearchHandler()}>
                    <SearchRoundedIcon />
                </IconButton>
                <input type="text"
                    placeholder='جستو‌جوی محصولات'
                    value={search}
                    ref={searchInput}
                    onChange={e => searchHandler(e)}
                    className={`bg-sky-300 py-2 px-3.5 rounded-full outline-none traa placeholder:text-zinc-600`} />
            </div>
            <div dir='ltr' className={`${search.trim() ? 'opacity-100 z-50' : 'opacity-0 -z-40'} absolute left-0 top-0 bg-sky-300 w-[80%] transition-all shadow-cs rounded-md h-[65%] p-4 overflow-y-scroll`}>
                <div className="" dir='rtl'>
                    <p className="">test</p>
                    <p className="">test</p>
                    <p className="">test</p>
                    <p className="">test</p>
                    <p className="">test</p>
                    <p className="">test</p>
                    <p className="">test</p>
                </div>
            </div>

        </div>
    );
}

export default SideMenu;