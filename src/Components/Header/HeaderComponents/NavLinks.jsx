import { Drawer } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Link } from "react-router-dom";

function NavLinks({ isOpen, setOpen, setDark }) {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setOpen(false)
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

    return (
        <Drawer
            anchor={'left'}
            open={isOpen}
            onClose={() => setOpen(false)}
            sx={{ fontFamily: 'vazir', textAlign: 'center' }}
            className="block lg:hidden"
        >
            <AnimatePresence>
                <div className="md:w-[60vw] w-[70vw] relative z-10 dark:bg-slate-800">
                    {/* <img src="./Imgs/sideBar.jpg" alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /> */}
                    <ul className="flex gap-4 text-center flex-col lg:hidden w-full p-6 transition-all duration-200 h-full">

                        <div className="flex gap-4">
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.1,
                                }}
                                className="p-[0.08rem] rounded-xl bg-gradient-to-tr from-sky-500 to-sky-600"
                            >
                                <div className="w-full rounded-xl text-white ">
                                    <IconButton sx={{ color: 'white' }}>
                                        <SearchRoundedIcon />
                                    </IconButton>
                                </div>

                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.15,
                                }}
                                className="w-full p-[0.08rem] rounded-xl "
                            >
                                <div className="w-full rounded-xl text-white">
                                    <input type="text" className="w-full bg-gradient-to-tr from-sky-500 to-sky-600 rounded-xl outline-none px-4 py-[0.55rem] placeholder:text-slate-300" placeholder="جستوجو" />
                                </div>

                            </motion.li>
                        </div>
                        <div className="mb-5 flex gap-4">
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.25,
                                }}
                                className="p-[0.08rem] rounded-xl bg-gradient-to-tr from-sky-500 to-sky-600"
                            >
                                <div className="w-full rounded-xl text-white flex dark:hidden">
                                    <IconButton onClick={() => setDark(true)} sx={{ color: 'white' }}>
                                        <DarkModeRoundedIcon />
                                    </IconButton>
                                </div>
                                <div className="w-full rounded-xl text-white dark:flex hidden">
                                    <IconButton onClick={() => setDark(false)} sx={{ color: 'white' }}>
                                        <WbSunnyRoundedIcon />
                                    </IconButton>
                                </div>

                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.3,
                                }}
                                className="p-[0.08rem] rounded-xl bg-gradient-to-tr from-sky-500 to-sky-600"
                            >
                                <div className="w-full rounded-xl text-white flex items-center gap-8">
                                    <IconButton sx={{ color: 'white' }}>
                                        <LocalMallRoundedIcon />
                                    </IconButton>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.35,
                                }}
                                className="p-[0.08rem] rounded-xl bg-gradient-to-tr from-sky-500 to-sky-600"
                            >
                                <div className="w-full rounded-xl text-white flex items-center">
                                    <IconButton sx={{ color: 'white' }}>
                                        <PersonRoundedIcon />
                                    </IconButton>
                                </div>
                            </motion.li>

                        </div>
                        {links.map((li, idx) => {
                            return (
                                <li key={li.id}>
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.6 + idx / 5,
                                        }}
                                        className="w-full text-white mt-5 mb-4"
                                    >
                                        <Link to={li.path} onClick={li.func}>
                                            <div className="w-full rounded-xl bg-gradient-to-tr from-sky-500 to-sky-600 py-3 cursor-pointer">
                                                {li.txt}
                                            </div>
                                        </Link>
                                    </motion.div>

                                    <div className="grid grid-cols-2 gap-2">
                                        {li.subLinks.map((l, i) => (
                                            <Link to={l.path} onClick={li.func} key={i + 10}>
                                                <motion.div
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                        delay: 0.65 + idx / 5,
                                                    }}
                                                    key={li.id}
                                                    className="w-full whitespace-nowrap text-white rounded-lg py-1.5 bg-gradient-to-tr from-sky-400 to-sky-500"
                                                >
                                                    {l.link}
                                                </motion.div>
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                            );
                        })}

                    </ul>
                </div>
            </AnimatePresence>
        </Drawer>
    );
}

export default NavLinks;