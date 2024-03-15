import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';


function SideMenu({ setDark, isSearchOpen, setSearchOpen }) {
    return (
        <div className="fixed right-5 bottom-5 lg:flex flex-col gap-3 z-50 hidden">
            <div className="bg-sky-300 shadow-2xl rounded-full w-fit z-20 ">
                <IconButton>
                    <LocalMallRoundedIcon />
                </IconButton>
            </div>
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
            <div className="bg-sky-300 shadow-2xl rounded-full w-fit z-20 ">
                <IconButton onClick={() => setSearchOpen(!isSearchOpen)}>
                    <SearchRoundedIcon />
                </IconButton>
            </div>
            <div className="w-[14rem] overflow-hidden fixed bottom-5 right-16 rounded-full">
                <div className={isSearchOpen ?
                    'rounded-full flex justify-center items-center transition-all bg-sky-300 border border-white border-solid' :
                    'translate-x-full transition-all'
                }>
                    <input type="text" placeholder='dsfd' className='bg-sky-200 py-2 px-4 rounded-full outline-none' />
                </div>
            </div>
        </div>
    );
}

export default SideMenu;