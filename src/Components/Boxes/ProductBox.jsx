import { useState } from "react";
import { Link } from "react-router-dom";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function ProductBox({ box = true, basket = false , suggest = false }) {
    const [count, setCount] = useState(1)

    const deleteHandler = () => {

    }

    return (
        <>
            <div
                className={`flex ${suggest && 'shadow-none'} ${basket ? "bg-white w-fit sm:pl-4 flex-col sm:flex-row items-center sm:items-star gap-6 shadow-none" : "flex-col overflow-hidden dark:shadow-none"}  ${box ? 'bg-glass border border-solid border-sky-200 dark:border-gray-600 dark:bg-gray-800' : "shadow-css gr1"} rounded-2xl ${box && "lg:my-8 my-10"}`}>

                <Link to={'/product'}>
                    <img className={`${basket ? "md:w-40 sm:w-60 rounded-xl" : "border-b-2 rounded-2xl"}  border-solid border-slate-800 `} src="./Imgs/p1.jpg" alt="دوره پروژه محور متخصص جنگو" />
                </Link>

                {basket ?
                    <>
                        <div className="flex sm:gap-10 gap-2 py-2 md:flex-row flex-col w-fit sm:items-start md:items-center items-center justify-center text-sm md:text-base">
                            <div className="flex gap-2 flex-col sm:items-start items-center h-full">
                                <h3 className="">سرو سایه فکن</h3>
                                <h3 className="flex md:gap-2  items-center">قیمت واحد: <span>5,398,000</span></h3>
                                <h3 className="flex md:gap-2  items-center">قیمت کل: <span>5,398,000</span></h3>
                            </div>
                            <div className="w-fit h-fit rounded-full bg-sky-100 border-2 text-sky-700 border-sky-200 shadow border-solid flex items-center gap-2 text-lg sm:mb-0 mb-2">
                                <IconButton onClick={() => deleteHandler()} color="primary">
                                    <AddCircleRoundedIcon />
                                </IconButton>
                                {count}
                                <IconButton onClick={() => deleteHandler()} sx={{ color: 'red' }}>
                                    <CancelRoundedIcon />
                                </IconButton>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={`px-4 pt-2.5 pb-4 flex-grow border-b ${box ? 'border-sky-300' : "border-b-gray-100"}  dark:border-b-gray-700`}>
                            <p className={`text-sm h-10 line-clamp-2 ${box ? "text-slate-600 dark:text-slate-400" : "text-slate-800"}`}>سرو سایه فکن : درباره فردوسی و شاهنامه خوشنویسی: امیرخانی</p>
                        </div>

                        <div className="flex items-end justify-between mt-1.5 px-1 pb-2 ">
                            <span className="flex items-center gap-x-1.5 text-zinc-700 dark:text-white">
                                80%
                            </span>
                            <div className="flex flex-col items-start">
                                <span className="course__price font-danaMedium text-lg text-primary space-x-1.5">
                                    3,500,000
                                </span>
                            </div>
                        </div></>
                }

            </div>
        </>
    );
}

export default ProductBox;