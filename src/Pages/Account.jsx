import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import AccountChild from "./AccountChild";

function Account() {
    const [activeLink, setActiveLink] = useState('خانه')
    const links = [
        { id: 1, txt: 'خانه' },
        { id: 2, txt: 'سفارشات' },
        { id: 3, txt: 'جزییات حساب' },
        { id: 4, txt: 'نظرات' },
        { id: 5, txt: 'پرسش و پاسخ' },
    ]
    return (
        <div className="mt-32 w-[85vw] mx-auto flex gap-8">
            <div className="col-start-1 w-[20%] col-end-2 row-start-1 h-fit relative bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 transition-all outline-sky-100 outline-[6px] outline border-2 border-solid border-white text-slate-700 dark:text-white dark:border-slate-800 rounded-xl p-4 text-center pt-20 z-10">

                <h1 className="text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 text-slate-700  dark:text-white bg-white absolute transition-all">
                    پیشخوان
                </h1>
                {
                    links.map(l => (
                        <div key={l.id} onClick={() => setActiveLink(l.txt)} className="cursor-pointer">
                            <p className={`mt-5 border-sky-100 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500 bg-white outline-white shadow-cs py-2 px-4 outline-[4px] outline border-2 transition-all border-solid rounded-xl relative ${activeLink === l.txt && "border-x-sky-500 dark:border-x-white border-x-4"}`}>{l.txt}</p>
                        </div>
                    ))
                }

            </div>

            <AccountChild type={activeLink} setActiveLink={setActiveLink} />
        </div>
    );
}

export default Account;