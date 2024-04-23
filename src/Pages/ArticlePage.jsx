import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative'; import ProductBox from '../Components/Boxes/ProductBox';
import CommentInput from '../Components/Comment/CommentInput';
import SuggestionBox from '../Components/Boxes/SuggestionBox';
import CommentBox from '../Components/Comment/CommentBox';


function ArticlePage() {
    const [isCopied, setIsCopied] = useState(false)

    const copyHandler = () => {
        navigator.clipboard.writeText('http://localhost:3000/articles')
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }

    return (
        <>
            <div className="grid sm:w-[82vw] w-[98vw] mx-auto gap-8 mt-32">

                <div className="col-start-1 lg:col-end-6 row-start-1 lg:row-end-4 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6 text-slate-700 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">

                    <h1 className="border-b border-white border-solid pb-10 text-xl text-sky-900 dark:text-white">سرو سایه فکن</h1>

                    <div className="flex gap-4 mt-6 text-slate-500 dark:text-slate-200">
                        <div className="flex items-center gap-2">
                            <div className="">
                                <PersonOutlineRoundedIcon />
                            </div>
                            <span className="">
                                جواد ملکیان
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="">
                                <CalendarMonthRoundedIcon />
                            </div>
                            <span className="">1403/01/15</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="">
                                <RemoveRedEyeOutlinedIcon />
                            </div>
                            <span className="">192</span>
                        </div>
                    </div>

                    <div className="">
                        <img src="./Imgs/test.webp" alt="" className='rounded-xl mt-10 object-contain w-full' />
                    </div>

                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate omnis dicta animi officia dolorum eos consequatur blanditiis quo iure, perspiciatis, sapiente rem magnam praesentium atque voluptas vero ab harum at quasi quod distinctio aliquid. Aliquam, esse. Autem alias praesentium ad sit? Eius ducimus ipsam dolores nobis nihil voluptas molestiae doloribus?
                    </p>

                    <div className="">
                        <img src="./Imgs/test.webp" alt="" className='rounded-xl mt-10 object-contain w-full' />
                    </div>

                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas adipisci, fugiat sint in obcaecati. Illum, adipisci. Iste, quo, harum esse ipsam et voluptates ut quisquam optio provident eius sapiente consequuntur qui placeat deserunt, tempora asperiores nulla. Porro, incidunt quae quidem quis quaerat iure quisquam magnam! Deleniti adipisci minus, quod, dolores voluptatibus culpa, corporis eligendi minima illum quaerat assumenda recusandae. Molestiae molestias rem pariatur ullam illo neque in eos officiis minima quia. Expedita impedit in incidunt tempora id nisi asperiores itaque, esse at tempore, perferendis unde doloremque soluta, totam error. Ab error accusantium dolores unde laudantium. Incidunt tenetur ullam cupiditate.
                    </p>

                </div>

                <div className="lg:col-start-6 lg:col-end-8 lg:row-start-1 col-start-1 row-start-2 h-fit w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6 dark:bg-slate-600 dark:outline-slate-600">
                    <div className="flex items-center border-white border-b border-solid pb-6 text-lg text-sky-900 dark:text-white gap-3">
                        <div className="">
                            <ShareRoundedIcon />
                        </div>
                        <p className="">
                            اشتراک‌گذاری مطلب
                        </p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer mt-6 mb-2 py-1 px-2 rounded-lg bg-sky-200 text-lg relative text-sky-900 gap-3 border-2 border-sky-400 dark:border-slate-400 dark:text-slate-800 dark:bg-slate-400 border-dashed" onClick={() => copyHandler()}>
                        <div className="">
                            <InsertLinkRoundedIcon />
                        </div>
                        <p className="">http://localhost:3000/articles</p>
                        <p className={`absolute left-1/2 -translate-x-1/2 bg-sky-300 dark:text-slate-800 dark:bg-slate-400 rounded-lg py-1 px-2 transition-all -top-[110%] ${isCopied ? ' opacity-100 ' : ' opacity-0'}`}>کپی شد!</p>
                    </div>
                </div>

                <div className="lg:col-start-6 lg:col-end-8 col-start-1 lg:row-start-2 row-start-3 h-fit w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">
                    <SuggestionBox />
                </div>

                <div className="col-start-1 lg:col-end-6 row-start-4 h-fit w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">
                    <CommentInput />
                </div>

                <div className="col-start-1 lg:col-end-6 row-start-5 h-fit w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">
                    <CommentBox />
                </div>

            </div>
        </>
    );
}

export default ArticlePage;