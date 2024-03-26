import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function SideMenu({ setDark, isSearchOpen, setSearchOpen }) {
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     setSelection('')
    // }, [])

    const searchHandler = e => {
        setSearch(e.target.value)
    }
    const submitHandler = () => {
    }
    const btnSearchHandler = () => {
        if (isSearchOpen) {
            submitHandler()
        }
        setSearchOpen(!isSearchOpen)
    }
    return (
        <div className={`fixed right-5 bottom-5 lg:flex flex-col gap-3 hidden ${isSearchOpen && "z-50"}`}>
            <Link
                to={'/basket'}
                className="bg-sky-300 shadow-2xl rounded-full w-fit z-20"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <IconButton>
                    <LocalMallRoundedIcon />
                </IconButton>
            </Link>
            <div className="bg-sky-300 shadow-2xl rounded-full dark:hidden w-fit">
                <IconButton onClick={() => setDark(true)}>
                    <DarkModeRoundedIcon />
                </IconButton>
            </div>
            <div className="bg-sky-300 shadow-2xl rounded-full hidden dark:block w-fit">
                <IconButton onClick={() => setDark(false)}>
                    <WbSunnyRoundedIcon />
                </IconButton>
            </div>

            <div className={`z-50 bg-sky-300 shadow-css transition-all overflow-hidden flex items-center ${isSearchOpen ? "w-full rounded-r-3xl rounded-l-md duration-500" : 'w-10 rounded-full duration-75'}`}>
                <IconButton onClick={() => btnSearchHandler()}>
                    <SearchRoundedIcon />
                </IconButton>
                <input type="text"
                    placeholder='جستو‌جوی محصولات'
                    value={search}
                    onChange={e => searchHandler(e)}
                    className={`bg-sky-300 py-2 px-3.5 rounded-full outline-none traa placeholder:text-zinc-600`} />
            </div>

        </div>
    );
}

export default SideMenu;