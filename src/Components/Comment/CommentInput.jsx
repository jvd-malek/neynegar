import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

function CommentInput({ ticket = false }) {
    const [value, setValue] = useState(4.5);
    const [hover, setHover] = useState(-1);
    const labels = {
        0.5: 'ضعیف',
        1: '+ ضعیف',
        1.5: 'متوسط',
        2: '+ متوسط',
        2.5: 'خوب',
        3: '+ خوب',
        3.5: '+ خیلی‌خوب',
        4: 'خیلی‌خوب',
        4.5: 'عالی',
        5: '+ عالی',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    return (
        <>
            <div className={`${!ticket ? 'mb-32' : 'mb-10'}`}>
                {!ticket &&
                    <>
                        <h3 className="text-slate-700 text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 dark:text-white bg-white absolute transition-all ">
                            ثبت دیدگاه
                        </h3>
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-center gap-6 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500">
                            <p className="">امتیاز دهید!</p>
                            <div className="flex gap-4 w-1/2" dir='ltr'>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
                                    icon={<StarRoundedIcon fontSize="inherit" />}
                                />
                                <p className="sm:block hidden">{labels[hover !== -1 ? hover : value]}</p>
                            </div>
                        </div>
                    </>
                }
                {
                    ticket &&
                    <div className="border-sky-100 mt-4 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-center gap-6 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500">
                        <label className="" htmlFor='commentsTitle'>عنوان پرسش</label>
                        <input type="text" className='py-2 pl-4 pr-6 rounded border-2 dark:bg-slate-400 dark:text-white dark:placeholder:text-slate-200 dark:border-slate-300 focus:shadow-cs border-solid outline-none border-sky-400 bg-sky-50 placeholder:text-gray-500' id='commentsTitle' placeholder='مثال: کیفیت محصول' />
                    </div>
                }
                <div className={`border-sky-100 ${ticket ? 'mt-4' : ' mt-8'} bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-start gap-6 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500`}>
                    <label className="" htmlFor='commentsBody'>
                        {ticket ? "سوال شما" : 'محتوا دیدگاه'}

                    </label>
                    <textarea name="" id="commentsBody" cols="30" rows="4" className='py-2 lg:w-fit w-full pl-4 pr-6 rounded border-2 focus:shadow-cs border-solid outline-none dark:bg-slate-400 dark:text-white dark:placeholder:text-slate-200 dark:border-slate-300 border-sky-400 bg-sky-50 placeholder:text-gray-500' placeholder={ticket ? "مثال: آیا کتاب سرو سایه را ..." : 'مثال: محصول کیفیت مطلوب را ...'} ></textarea>
                </div>
            </div>
            <button className={`transition-all duration-75 w-[90%] ${ticket ? ' mx-auto flex justify-center mb-20' : 'mt-6 absolute bottom-8 left-1/2 -translate-x-1/2'}  dark:active:border-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900 py-2.5  rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>
                {
                    ticket ? 'ثبت تیکت' : "ثبت دیدگاه"
                }
            </button>
        </>
    );
}

export default CommentInput;