import { useState, useEffect } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from '../../Routes/Routes';


function Footer() {
    const router = useRoutes(routes)

    return (
        <div
            className={(router.props.match.pathname !== '/login' && router.props.match.pathname !== '/signup') ?
                "" : 'hidden'}>
            <div
                className="flex md:flex-row flex-col gap-8 justify-around font-[vazir] w-[85vw] mx-auto rounded-3xl p-8 bg-sky-200 mt-40 mb-20 outline-sky-200 outline-[6px] outline border-x-2 border-t-2 border-solid border-white dark:border-slate-800 transition-all before:bg-sky-500 before:absolute relative before:left-1/2 before:-translate-x-1/2 before:w-[50%] before:h-40 before:-z-10 before:-bottom-5 before:rounded-3xl"

            >
                <div className="flex flex-col ">
                    <h3 className="font-bold border-b border-solid border-sky-300 text-gray-600">ارتباط با ما</h3>
                    <div className="mt-8 flex flex-col items-end">
                        <h3 className="text-gray-600 ">email: malekian0079@gmail.com</h3>
                        <h3 className="text-gray-600">github: github.com/jvd-malek</h3>
                        <h3 className="text-gray-600" dir='ltr'>tel: +98 9960025507</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="border-b border-solid border-sky-300 font-bold text-gray-600">مجوزات</h3>
                    <div className="flex gap-8 mt-6 justify-center">
                        <img src="./Imgs/License_2.png" alt="" className='w-32' />
                        <img src="./Imgs/License_1.png" alt="" className='w-32' />
                    </div>
                </div>
            </div>

            <div className="bg-sky-200 w-[85vw] mx-auto rounded-t-3xl">
                <p className="p-3  text-center font-[vazir]">
                    {'کلیه حقوق برای '}
                    <Link to={'/'}>
                        فروشگاه مجازی نی‌نگار
                    </Link>
                    {' محفوظ است'}
                </p>
            </div>
        </div>
    );
}

export default Footer;