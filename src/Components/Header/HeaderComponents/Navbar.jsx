import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useEffect, useState } from "react";

function Navbar({ children, isDark, isOpenFirst, isOpenSecond, isHeaderScrolled, setOpenFirst, setOpenSecond, isFixed }) {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const links = [
        {
            id: 1, txt: 'لوازم خوشنویسی', func: scrollTop, path: '/caligraphic-product',
            subLinks: [
                { link: "کتب‌ نفیس", path: '/' },
                { link: "قلم‌نی", path: '/login' },
                { link: "قطع‌زن", path: '/' },
                { link: "کاغذ", path: '/' },
                { link: "مرکب", path: '/' },
                { link: "قلم‌تراش", path: '/' }
            ]
        },
        {
            id: 2, txt: 'لوازم نقاشی', func: scrollTop, path: '/painting-product',
            subLinks: [
                { link: "کتب‌ نفیس", path: '/' },
                { link: "قلم‌نی", path: '/' },
                { link: "قطع‌زن", path: '/' },
                { link: "کاغذ", path: '/' },
                { link: "مرکب", path: '/' },
                { link: "قلم‌تراش", path: '/' }
            ]
        },
        {
            id: 3, txt: 'هنرهای سنتی', func: scrollTop, path: '/traditional-product',
            subLinks: [
                { link: "کتب‌ نفیس", path: '/' },
                { link: "قلم‌نی", path: '/' },
                { link: "قطع‌زن", path: '/' },
                { link: "کاغذ", path: '/' },
                { link: "مرکب", path: '/' },
                { link: "قلم‌تراش", path: '/' }
            ]
        },
        {
            id: 4, txt: 'مقالات', func: scrollTop, path: '/articles',
            subLinks: [
                { link: "کتب‌ نفیس", path: '/' },
                { link: "قلم‌نی", path: '/' },
                { link: "قطع‌زن", path: '/' },
                { link: "کاغذ", path: '/' },
                { link: "مرکب", path: '/' },
            ]
        },
    ]

    const [dark, setDark] = useState('primary')

    useEffect(() => {
        if (isDark) {
            setDark('white')
        } else {
            setDark('primary')
        }
    }, [isDark])


    return (
        <>
            <div className={isFixed ?
                (isHeaderScrolled ?
                    "scrolledNavbarFixed" :
                    "navbarFixed") :
                (isHeaderScrolled ?
                    "scrolledNavbar" :
                    "navbar")}>
                <div className="flex justify-between items-center">
                    <div className="lg:hidden ">
                        {isFixed ?
                            (<IconButton color="primary">
                                <Hamburger toggled={isOpenSecond} size={30} toggle={setOpenSecond} />
                            </IconButton>) :
                            (<IconButton color="primary" sx={{ color: dark }}>
                                <Hamburger toggled={isOpenFirst} size={30} toggle={setOpenFirst} />
                            </IconButton>)
                        }
                    </div>
                    <div className="headerStyle gap-20">
                        <div className=" text-4xl font-[Soofee] ml-10 relative color" onClick={() => scrollTop()}>
                            <Link to={'/'}>
                                <span className="">نی‌</span>
                                <span className="absolute -left-12">نگار</span>
                            </Link>
                        </div>
                        <ul className="lg:headerStyle hidden">
                            {links.map(item => (
                                <li key={item.id} onClick={item.func} className="cursor-pointer font-[vazir] [&>div]:hover:block relative">
                                    <Link to={item.path}>
                                        {item.txt}
                                    </Link>
                                    <div className={`hidden absolute z-50`}>
                                        <div className={`bg-white p-2  rounded-xl flex shadow-cs gap-4 ${isHeaderScrolled ? 'mt-8' : 'mt-3'}`}>
                                            {item.subLinks.map((l, i) => (
                                                <Link to={l.path} key={i} className="whitespace-nowrap text-sky-800">
                                                    {l.link}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-full text-lg xl:text-lg text-white dark:text-sky-900 lg:w-[155px] xl:w-[180px]">
                        <Link to={'/login'} className="h-full w-24 xl:w-28 hidden lg:flex items-center justify-start py-1 bg-sky-500/60 hover:bg-sky-400 dark:bg-sky-100 dark:hover:bg-[#3F6CD8] dark:hover:text-white rounded-full pr-5 transition-colors">ورود</Link>
                        <Link to={'/register'} className="absolute top-0 left-0 w-24 xl:w-28 hidden lg:flex items-center justify-center py-1 bg-sky-500 hover:bg-sky-600 dark:bg-sky-300 dark:hover:bg-[#3F6CD8] dark:hover:text-white rounded-full z-10 transition-colors">ثبت‌نام</Link>
                        {/* <!-- When Screen Smaller Than 475px, Its Display --> */}
                        <Link to={'/login'} className="lg:hidden">
                            <IconButton color="primary" sx={{ color: dark }}>
                                <AccountCircleTwoToneIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}

export default Navbar;