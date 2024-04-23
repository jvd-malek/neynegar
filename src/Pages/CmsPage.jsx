import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function CmsPage() {

    const [activeLink, setActiveLink] = useState(null)
    const links = [
        { id: 1, txt: 'سفارشات', path: '/cms/products' },
        { id: 2, txt: 'مقالات', path: '/cms/articles' },
        { id: 3, txt: 'کامنت‌ها', path: '/cms/comments' },
        { id: 4, txt: 'سفارشات', path: '/cms/orders' },
        { id: 5, txt: 'تخفیف‌ها', path: '/cms/discounts' },
    ]
    return (
        <div className="mt-32 w-[85vw] mx-auto grid gap-8">
            <div className="col-start-1 col-end-2 row-start-1 h-fit relative bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 transition-all outline-sky-100 outline-[6px] outline border-x-2 border-y-2 border-solid border-white text-slate-700 dark:text-white dark:border-slate-800 rounded-xl p-4 text-center pt-20 z-10">

                <h1 className="text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 text-slate-700  dark:text-white bg-white absolute transition-all">
                    مدیریت سایت
                </h1>
                {
                    links.map(l => (
                        <Link to={l.path} key={l.id}>
                            <p className={`mt-5 border-sky-100 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500 bg-white outline-white shadow-cs py-2 px-4 outline-[4px] outline border-2 border-solid rounded-xl relative ${activeLink === l.txt && "border-b-sky-500 dark:border-b-white border-b-4 transition-all"}
 `}
                                onClick={() => setActiveLink(l.txt)}>{l.txt}</p>
                        </Link>
                    ))
                }

            </div>

            <Outlet />
        </div>
    );
}

export default CmsPage;