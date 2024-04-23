import { useState, useEffect } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from '../../Routes/Routes';


function Footer() {
    const router = useRoutes(routes)

    return (
        <div
            className={(router.props.match.pathname !== '/login' && router.props.match.pathname !== '/register') ?
                "" : 'hidden'}>
            <div
                className="flex md:flex-row flex-col text-gray-600 dark:text-white dark:bg-slate-600 dark:outline-slate-600 gap-8 justify-around font-[vazir] sm:w-[85vw] w-[98vw] mx-auto rounded-3xl p-8 bg-sky-200  mt-40 mb-20 outline-sky-200 outline-[6px] outline border-x-2 border-t-2 border-solid border-white dark:border-slate-800 transition-all before:bg-sky-500 dark:before:bg-sky-200 before:absolute relative before:left-1/2 before:-translate-x-1/2 before:w-[50%] before:h-40 before:-z-10 before:-bottom-5 before:rounded-3xl"

            >
                <div className="flex flex-col ">
                    <h3 className="border-b border-solid border-sky-300 dark:border-white">ارتباط با ما</h3>
                    <div className="mt-8 flex flex-col items-end">
                        <h3 className="">email: malekian0079@gmail.com</h3>
                        <h3 className="">github: github.com/jvd-malek</h3>
                        <h3 className="" dir='ltr'>tel: +98 9960025507</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="border-b border-solid border-sky-300 dark:border-white">مجوزات</h3>

                    <div className="flex gap-8 mt-6 justify-center dark:bg-sky-200 transition-all p-1 border-2 border-solid dark:border-slate-600 border-sky-200 dark:outline-4 dark:outline dark:outline-sky-200 rounded-xl">
                        <img src="./../Imgs/License_2.png" alt="" className='w-32' />
                        <img src="./../Imgs/License_1.png" alt="" className='w-32' />
                    </div>

                </div>
            </div>

            <div className="bg-sky-200 w-[85vw] mx-auto rounded-t-3xl dark:text-white dark:bg-slate-600">
                <p className="p-3  text-center font-[vazir]">
                    {'کلیه حقوق برای '}
                    <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        فروشگاه مجازی نی‌نگار
                    </Link>
                    {' محفوظ است'}
                </p>
            </div>
        </div>
    );
}

export default Footer;