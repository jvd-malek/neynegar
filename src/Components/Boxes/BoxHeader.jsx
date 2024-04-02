import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { IconButton } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

function BoxHeader({ title, txt1, txt2, color, all = true, link = "/", searchBar = false, count = [10, 20, 30] }) {

    const [selection, setSelection] = useState('')
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState(false)

    const searchHandler = e => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="flex items-end sm:items-center justify-between mb-8 gap-4 sm:flex-row flex-col mt-20 mx-auto w-[81vw]">
                <div className="space-y-2.5 self-start">
                    <div className="flex items-baseline gap-x-2.5 sm:gap-x-3.5">
                        <span className={`min-w-4 min-h-4 lg:w-6 ${color} rounded-sm`}></span>
                        <h3 className="text-zinc-700 dark:text-white text-2xl font-bold sm:text-3xl">{title}</h3>
                    </div>
                    {txt1 &&
                        <div className="text-slate-500 dark:text-slate-400 sm:text-xl font-[vazir]">
                            <Typewriter
                                options={{
                                    strings: [txt1, txt2],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    }
                </div>
                {all &&
                    <Link to={link} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center w-fit gap-x-1 rounded-xl px-2.5 py-2 text-sky-500 hover:bg-sky-500/10 dark:text-white  transition-colors">
                        <span className="font-[vazir] inline-block">مشاهده همه</span>
                        <KeyboardBackspaceRoundedIcon />
                    </Link>
                }
            </div>

            {searchBar &&
                <div className="flex sm:flex-row flex-col gap-4 justify-between sm:items-center w-[82vw] mx-auto font-[vazir] mt-10">

                    <div className="sm:flex-row flex-col flex gap-4 sm:items-center">
                        <div className={`bg-sky-200  transition-all duration-500 flex items-center overflow-hidden shadow-md ${sort ? "w-36 rounded-r-3xl rounded-l-lg" : 'w-10 rounded-full'}`}>
                            <IconButton sx={{ color: "#486076" }} onClick={() => setSort(!sort)}>
                                <FilterListRoundedIcon />
                            </IconButton>
                            <div className={`p-2 transition-all duration-500 outline-none bg-sky-200 rounded-md overflow-hidden text-slate-700 ${sort ? "w-full opacity-100" : "w-0 opacity-0"}`}>
                                <select name="مرتب‌سازی"
                                    value={selection}
                                    onChange={e => setSelection(e.target.value)}
                                    className="bg-sky-200 outline-none">
                                    <option value="default" >پیش فرض</option>
                                    <option value="cheap" >ارزانترین‌ها</option>
                                    <option value="expensive" >گرانترین‌ها</option>
                                    <option value="latest" >تازه‌ترین‌ها‌</option>
                                    <option value="popular" >محبوبیت</option>
                                </select>
                            </div>
                        </div>

                        <div className="p-2 bg-sky-200 rounded-lg text-slate-700 flex items-center w-fit shadow-md ">
                            تعداد در صفحه:
                            <select name="مرتب‌سازی"
                                value={selection}
                                onChange={e => setSelection(e.target.value)}
                                className="bg-sky-200 outline-none">
                                {count.map(i => (
                                    <option value={i} key={i}>{i}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-2 bg-sky-200 w-fit rounded-lg shadow-md ">
                        <div className="text-slate-700">
                            <input type="text"
                                className="py-1 px-4 outline-none rounded-full bg-sky-200 placeholder:text-slate-600 md:w-full sm:w-36"
                                placeholder="جستوجو محصولات"
                                value={search}
                                onChange={e => searchHandler(e)}
                            />
                            {/* <input type="text"
                                    className="py-1 px-2 outline-none rounded-md bg-sky-200 placeholder:text-slate-600 hidden sm:block "
                                    placeholder="جستوجوی محصولات"
                                    value={search}
                                    onChange={e => searchHandler(e)}
                                /> */}
                        </div>
                        <div className="">
                            <IconButton sx={{ color: '#486076' }}>
                                <SearchRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default BoxHeader;