import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

function CaligraphyComponentes() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="sm:grid flex flex-col lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 2xl:w-[60vw] xl:w-[70vw] w-[81vw] mx-auto font-[vazir] gap-20 lg:mt-10 mt-20 mb-20 text-center lg:text-start">

            <div className=" lg:col-start-1 lg:col-end-3 lg:h-fit h-60 row-start-1 flex lg:items-center items-end gr1 lg:justify-start justify-center outline-blue-400 outline-4 outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl relative lg:p-8 px-8 pb-4">
                <div className=" absolute lg:bottom-0 lg:left-10 lg:translate-x-0 left-1/2 -translate-x-1/2 -top-10">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        className="w-28"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {list.map(i => (
                            <SwiperSlide key={i}>
                                <img src="./Imgs/book1.jpg" alt="" className='' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className='text-2xl text-slate-800'>کتاب‌های نفیس خوشنویسی</h2>
                    <Link to={"/"} className="flex items-center w-fit gap-x-1 pt-2 text-slate-700 ">
                        <span className="font-[vazir] inline-block ">مشاهده همه</span>
                        <div className="md:inline-block hidden">
                            <KeyboardBackspaceRoundedIcon />
                        </div>
                    </Link>
                </div>
            </div>

            <div className=" lg:col-start-1 lg:col-end-3 row-start-2 lg:h-fit h-60 flex lg:items-center items-end lg:justify-start justify-center gr2 outline-blue-400 outline-4 outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl relative p-8">
                <div className=" absolute lg:bottom-8 lg:translate-x-0 lg:-left-3 left-1/2 -translate-x-[55%] -top-12  w-52">
                    <img src="./Imgs/color2.png" alt="" className=' w-32' />
                </div>
                <div className=" absolute lg:bottom-3 lg:translate-x-0 lg:-left-16 left-1/2 -translate-x-[80%] -top-8 w-52">
                    <img src="./Imgs/color1.png" alt="" className=' w-32' />
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className='text-2xl text-slate-800'>مرکب‌های خاص خوشنویسی  </h2>
                    <Link to={"/"} className="flex items-center w-fit gap-x-1 pt-2 text-slate-700">
                        <span className="font-[vazir] inline-block ">مشاهده همه</span>
                        <div className="md:inline-block hidden">
                            <KeyboardBackspaceRoundedIcon />
                        </div>
                    </Link>
                </div>
            </div>

            <div className=" lg:col-start-3 lg:col-end-4 row-start-1 lg:h-fit h-60 flex lg:items-center lg:justify-start justify-center items-end gr3 outline-blue-400 outline-4 outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl relative pb-4 pt-12 px-8">
                <div className=" absolute lg:-top-10 lg:translate-x-0 lg:-left-10 lg:w-44 left-1/2 -translate-x-[42%] -top-16 w-60">
                    <img src="./Imgs/paper.png" alt="" />
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className='text-2xl text-slate-800 lg:hidden block '>کاغذ‌های متنوع خوشنویسی</h2>
                    <Link to={"/"} className="flex items-center w-fit gap-x-1 pt-2 text-slate-700 ">
                        <span className="font-[vazir] inline-block ">مشاهده همه</span>
                        <div className="md:inline-block hidden">
                            <KeyboardBackspaceRoundedIcon />
                        </div>
                    </Link>
                    <h2 className='text-2xl text-slate-800 lg:block hidden'>کاغذ خوشنویسی</h2>
                </div>
            </div>

            <div className=" lg:col-start-3 lg:col-end-4 row-start-2 lg:h-fit h-60 flex lg:items-center justify-center items-end lg:justify-end gr4 outline-blue-400 outline-4 outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl relative p-8">
                <div className=" absolute lg:bottom-7 lg:right-0 lg:translate-x-0 lg:w-40 left-1/2 -translate-x-[45%] -top-[3.5rem] w-40">
                    <img src="./Imgs/ghalamtarash2.png" alt="" className='lg:-rotate-90 -rotate-45' />
                </div>
                <div className=" absolute lg:-top-9 lg:right-4 lg:translate-x-0 lg:w-40 left-1/2 -translate-x-[55%] -top-[2.8rem] w-40">
                    <img src="./Imgs/ghalamtarash1.png" alt="" className='lg:-rotate-90 -rotate-45' />
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className='text-2xl text-slate-800'>قلم‌تراش</h2>
                    <Link to={"/"} className="flex items-center w-fit gap-x-1 pt-2 text-slate-700">
                        <span className="font-[vazir] inline-block ">مشاهده همه</span>
                        <div className="md:inline-block hidden">
                            <KeyboardBackspaceRoundedIcon />
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default CaligraphyComponentes;