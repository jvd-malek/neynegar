function ProductBox({box=true}) {
    return (
        <>
            <div className={`flex flex-col overflow-hidden ${box ? 'bg-glass shadow-cs dark:bg-gray-800' : "gr1 shadow-css"} dark:shadow-none rounded-2xl ${box && "lg:my-8 my-10"}`}>
                <img className=" border-b-2 border-solid border-slate-800 rounded-2xl" src="./Imgs/p1.jpg" alt="دوره پروژه محور متخصص جنگو" />
                <div className="px-4 pt-2.5 pb-4 flex-grow border-b border-b-gray-100 dark:border-b-gray-700">
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
                </div>
            </div>
        </>
    );
}

export default ProductBox;