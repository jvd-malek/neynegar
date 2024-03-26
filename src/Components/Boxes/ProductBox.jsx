import { Link } from "react-router-dom";

function ProductBox({ box = true, basket = false }) {
    return (
        <>
            <Link
                to={'/product'}
                className={`flex ${basket ? "sm:flex-row flex-col sm:h-20 sm:items-center shadow-css" : "flex-col overflow-hidden dark:shadow-none"}  ${box ? 'bg-glass border border-solid border-sky-200 dark:border-gray-600 dark:bg-gray-800' : "gr1 shadow-css"} rounded-2xl ${box && "lg:my-8 my-10"}`}>
                <img className={`${basket ? "sm:w-32 sm:h-32 sm:border-l-2 border-l-0 border-b-2 sm:border-b-0 shadow-css" : "border-b-2"}  border-solid border-slate-800 rounded-2xl`} src="./Imgs/p1.jpg" alt="دوره پروژه محور متخصص جنگو" />
                {basket ?
                    <>
                    dgsgdfh
                    </>
                    :
                    <>
                        <div className={`px-4 pt-2.5 pb-4 flex-grow border-b ${box ? 'border-sky-300' : "border-b-gray-100"}  dark:border-b-gray-700`}>
                            <p className={`text-sm h-10 line-clamp-2 ${box ? "text-slate-600 dark:text-slate-400" : "text-slate-800"}`}>سرو سایه فکن : درباره فردوسی و شاهنامه خوشنویسی: امیرخانی</p>
                        </div>

                        <div className="flex items-end justify-between mt-1.5 px-5 pb-2 ">
                            <span className="flex items-center gap-x-1.5 text-zinc-700 dark:text-white">
                                510
                            </span>
                            <div className="flex flex-col items-start">
                                <span className="course__price font-danaMedium text-xl text-primary space-x-1.5">
                                    3,500,000
                                </span>
                            </div>
                        </div></>
                }

            </Link>
        </>
    );
}

export default ProductBox;