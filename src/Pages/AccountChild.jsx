import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useState } from "react";
import CommentBox from "../Components/Comment/CommentBox";
import ProductBox from '../Components/Boxes/ProductBox'
import CommentInput from '../Components/Comment/CommentInput';
function AccountChild({ type, setActiveLink }) {
    const [img, setImg] = useState('')
    const [fav, setFav] = useState(false)

    return (
        <>
            <div className="bg-sky-100 w-full dark:bg-slate-600 dark:outline-slate-600 transition-all outline-sky-100 outline-[6px] outline border-x-2 border-y-2 border-solid relative dark:text-white text-slate-700 border-white dark:border-slate-800 rounded-xl p-4 col-start-2 col-end-5 row-start-1 ">
                {
                    type !== "خانه" &&
                    <h3 className="text-lg font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 text-slate-700  dark:text-white bg-white absolute transition-all">
                        {type}
                    </h3>
                }

                {
                    type === 'خانه' &&

                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <h2 className=" text-xl">جواد ملکیان عزیز؛ خوش اومدی 🙌</h2>
                            <div className="flex gap-4 items-center">
                                <div className="dark:text-white text-sky-500 transition-all">
                                    <CircleNotificationsRoundedIcon sx={{ fontSize: '4rem' }} />
                                </div>
                                <img src={img} alt="" className={`w-16 h-16 rounded-full object-cover ${img ? 'block' : 'hidden'}`} />
                                <div className={`${img ? 'hidden' : 'block'} text-sky-500 dark:text-white transition-all`}>
                                    <AccountCircleTwoToneIcon sx={{ fontSize: '4rem' }} />
                                </div>
                            </div>
                        </div>

                        <div className="">

                            <div className="">
                                <div className="flex justify-between items-center border-solid border-b dark:border-white border-slate-500 mt-16 pb-3">
                                    <p className=" text-lg">
                                        مورد علاقه های من
                                    </p>
                                    <div
                                        onClick={() => setFav(true)}
                                        className="flex items-center gap-x-1.5 cursor-pointer">
                                        مشاهده همه
                                        <span className="text-slate-700 dark:text-white">
                                            <KeyboardBackspaceRoundedIcon />
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-8 justify-center">

                                    <div className="w-40 mt-10">
                                        <ProductBox box={false} suggest={true} />
                                    </div>
                                    <div className="w-40 mt-10">
                                        <ProductBox box={false} suggest={true} />
                                    </div>
                                    <div className="w-40 mt-10">
                                        <ProductBox box={false} suggest={true} />
                                    </div>
                                    <div className="w-40 mt-10">
                                        <ProductBox box={false} suggest={true} />
                                    </div>

                                </div>
                            </div>

                            <div className="">
                                <div className="flex justify-between items-center border-solid border-b dark:border-white border-slate-500 mt-20 pb-3">
                                    <p className=" text-lg">
                                        سفارشات اخیر
                                    </p>
                                    <div
                                        onClick={() => setActiveLink('سفارشات')}
                                        className="flex items-center gap-x-1.5 cursor-pointer">
                                        مشاهده همه
                                        <span className="text-slate-700 dark:text-white">
                                            <KeyboardBackspaceRoundedIcon />
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-10 w-full">
                                    <div className="border-sky-100 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500 mt-7 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl w-full">
                                        <div className="flex justify-between items-center w-full gap-2">
                                            <p className=" text-lg">
                                                سفارش 102487
                                            </p>
                                            <div className="flex gap-4 items-center">
                                                <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">جزییات</button>
                                                <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">فاکتور</button>
                                                <p className=" text-sm ">
                                                    1402/10/03
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-sky-100 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500 mt-7 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl w-full">
                                        <div className="flex justify-between items-center w-full gap-2">
                                            <p className=" text-lg">
                                                سفارش 102487
                                            </p>
                                            <div className="flex gap-4 items-center">
                                                <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">جزییات</button>
                                                <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">فاکتور</button>
                                                <p className=" text-sm ">
                                                    1402/10/03
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="flex justify-between items-center border-solid border-b dark:border-white border-slate-500 mt-20 pb-3">
                                    <p className=" text-lg">
                                        نظرات اخیر
                                    </p>
                                    <div
                                        onClick={() => setActiveLink('نظرات')}
                                        className="flex items-center gap-x-1.5 cursor-pointer">
                                        مشاهده همه
                                        <span className="text-slate-700 dark:text-white">
                                            <KeyboardBackspaceRoundedIcon />
                                        </span>
                                    </div>
                                </div>
                                <CommentBox account={true} />
                            </div>

                            <div className="">
                                <div className="flex justify-between items-center border-solid border-b dark:border-white border-slate-500 mt-20 pb-3">
                                    <p className=" text-lg">
                                        سوالات اخیر
                                    </p>
                                    <div
                                        onClick={() => setActiveLink('تیکت‌ها')}
                                        className="flex items-center gap-x-1.5 cursor-pointer">
                                        مشاهده همه
                                        <span className="text-slate-700 dark:text-white">
                                            <KeyboardBackspaceRoundedIcon />
                                        </span>
                                    </div>
                                </div>
                                <CommentBox ticket={true} />
                            </div>
                        </div>

                    </div>
                }

                {
                    type === 'سفارشات' &&
                    <div className='pb-8'>
                        <div className="">
                            <div className="flex justify-between items-center border-solid border-b mt-24 dark:border-white border-slate-500  pb-3">
                                <div className="flex justify-between items-center w-full gap-2">
                                    <p className=" text-lg">
                                        سفارش 102487
                                    </p>
                                    <div className="flex gap-4 items-center">
                                        <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">جزییات</button>
                                        <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">فاکتور</button>
                                        <p className=" text-sm ">
                                            1402/10/03
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10 flex flex-wrap gap-8 justify-center">
                                <ProductBox basket={true} box={false} account={true} />
                                <ProductBox basket={true} box={false} account={true} />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center border-solid border-b mt-24 dark:border-white border-slate-500  pb-3">
                                <div className="flex justify-between items-center w-full gap-2">
                                    <p className=" text-lg">
                                        سفارش 102487
                                    </p>
                                    <div className="flex gap-4 items-center">
                                        <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">جزییات</button>
                                        <button className="px-2 py-[1px] text-center rounded-md bg-sky-50 border-2 text-sky-700 transition-all dark:border-slate-300 border-sky-200 dark:bg-slate-400 dark:text-white shadow border-solid">فاکتور</button>
                                        <p className=" text-sm ">
                                            1402/10/03
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10 flex flex-wrap gap-8 justify-center">
                                <ProductBox basket={true} box={false} account={true} />
                                <ProductBox basket={true} box={false} account={true} />
                            </div>
                        </div>
                    </div>
                }

                {
                    type === 'جزییات حساب' &&
                    <div className='mt-24'>
                        <img src={img} alt="" className={`w-32 h-32 rounded-full object-cover ${img ? 'block' : 'hidden'}`} />
                        <div className={`${img ? 'hidden' : 'block'} text-sky-500 dark:text-white transition-all`}>
                            <AccountCircleTwoToneIcon sx={{ fontSize: '8rem' }} />
                        </div>
                    </div>
                }

                {
                    type === 'نظرات' &&
                    <div className="mt-24">
                        <CommentBox account={true} />
                        <CommentBox account={true} />
                        <CommentBox account={true} />
                    </div>
                }

                {
                    type === 'پرسش و پاسخ' &&
                    <div className="mt-24">
                        <CommentInput ticket={true} />
                        <p className=" text-lg border-solid border-b dark:border-white border-slate-500 mb-10 pb-3">
                            سوالات شما
                        </p>
                        <CommentBox ticket={true} />
                        <CommentBox ticket={true} />
                    </div>
                }

            </div>
        </>
    );
}

export default AccountChild;