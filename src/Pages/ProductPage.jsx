import { IconButton } from '@mui/material';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import { useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import ProductBox from '../Components/Boxes/ProductBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Link } from 'react-router-dom';

function Product() {
    const [img, setImg] = useState("./Imgs/book1.jpg")
    const [value, setValue] = useState(4.5);
    const [hover, setHover] = useState(-1);

    const Handler = () => {

    }

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
            <div className="w-[85vw] mx-auto mt-12 grid gap-10">

                {/* starts of products images */}
                <div className="col-start-1 lg:col-end-4 col-end-8 row-start-1 lg:row-end-3 w-full bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4 flex flex-col justify-between">

                    <div className="lg:block md:flex block gap-8">
                        <div className="rounded-xl outline-[4px] outline border-2 border-solid py-8 pl-6 pr-12 border-sky-100 shadow-cs bg-white outline-white relative w-fit mx-auto lg:mb-0 md:mb-4">
                            <img src={img} alt="" className="w-72 h-96 object-contain rounded-xl" />

                            <div className=" absolute top-10 right-1">
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <FavoriteRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 bg-sky-200 shadow-md rounded-lg text-sky-900">اضافه به علاقه‌مندی‌ها</p>
                                </div>
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <NotificationsActiveRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 bg-sky-200 shadow-md rounded-lg text-sky-900">اطلاع‌رسانی شگفت‌انگیز‌ها</p>
                                </div>
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <ShareRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 bg-sky-200 shadow-md rounded-lg text-sky-900">اشتراک‌گذاری محصول</p>
                                </div>
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <CommentRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 bg-sky-200 shadow-md rounded-lg text-sky-900">ثبت دیدگاه</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[17rem] mx-auto flex flex-col justify-between">
                            <div className="flex justify-between gap-2 border-sky-100 mt-8 bg-white outline-white shadow-cs py-2 px-4 outline-[4px] outline border-2 border-solid rounded-xl  h-fit">
                                <img src="./Imgs/book2.jpg" alt="" className="w-20 h-24 object-contain cursor-pointer rounded-lg" onClick={e => setImg(e.target.src)} />
                                <img src="./Imgs/book1.jpg" alt="" className="w-20 h-24 object-contain cursor-pointer rounded-lg" onClick={e => setImg(e.target.src)} />
                                <img src="./Imgs/color2.png" alt="" className="w-20 h-24 object-contain cursor-pointer rounded-lg" onClick={e => setImg(e.target.src)} />
                            </div>
                            <div className=" w-[90%] text-center mx-auto mt-12 mb-8 lg:hidden md:block hidden">
                                <p className="">
                                    در صورت هرگونه سوال در مورد این محصول <br />با ما تماس بگیرید <span className="">:)</span>
                                </p>
                                <button className={`py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>تماس با ما</button>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[90%] text-center mx-auto mt-12 mb-4 lg:block md:hidden">
                        <p className="">
                            در صورت هرگونه سوال در مورد این محصول <br />با ما تماس بگیرید <span className="">:)</span>
                        </p>
                        <button className={`py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>تماس با ما</button>
                    </div>


                </div>
                {/* ends of products images */}

                {/* starts of products details*/}
                <div className="lg:col-start-4 col-start-1 col-end-8 lg:row-start-1 lg:row-end-2 row-start-2 w-full bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4 flex flex-col justify-between">
                    <div className="">
                        <h2 className="text-xl font-bold text-slate-800">
                            مرقع رنگین جلد 1
                        </h2>
                        <div className="mt-4">
                            <p className="text-lg line-clamp-2">
                                منتخبی از آثار نفیس خوشنویسان بزرگ ایران تا نیمه قرن چهاردهم
                            </p>
                            <p className="leading-8 mt-2">
                                انتشارات: انجمن خوشنویسان ایران
                            </p>
                            <p className="leading-8">
                                نوبت چاپ: 1364
                            </p>
                            <p className="leading-8">قطع: رحلی</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="border-sky-100 mt-7 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl grid gap-6 items-center justify-between">
                            <div className="flex gap-4 col-start-2 col-end-3 row-start-1" dir='ltr'>
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
                                    readOnly
                                />
                                <p className="sm:block hidden">{labels[hover !== -1 ? hover : value]}</p>
                            </div>
                            <p className="col-start-1 col-end-2 row-start-1">موجودی: <span className="text-lg text-nowrap">1 عدد</span></p>
                            <p className="col-start-2 col-end-3 row-start-2 place-self-center">وضعیت: <span className="text-lg text-nowrap">نو</span></p>
                            <div className="col-start-1 col-end-2 row-start-2">
                                <p className="line-through text-gray-500 text-sm leading-3">170,000</p>
                                <h2 className="text-xl leading-3">155,000 <span className="text-base">تومان</span></h2>
                            </div>

                        </div>
                        <button className={`py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>اضافه به سبد خرید</button>
                    </div>
                </div>
                {/* ends of products details*/}

                {/* starts of details box*/}
                <div className="lg:col-start-4 col-start-1 col-end-8 lg:row-start-2 lg:row-end-3 row-start-3 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6">

                    <h3 className="absolute top-4 -right-2 bg-white text-slate-700 text-xl font-bold rounded-l-xl pr-6 pl-4 py-2 dark:bg-slate-800 dark:text-white transition-all">مشخصات</h3>

                    <div className='mt-10'>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                در باب محصول
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className=" text-sky-900 line-clamp-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </AccordionDetails>
                            <AccordionActions>
                                <Link
                                    to={'/article'}
                                    className="flex items-center gap-x-1.5 cursor-pointer text-sm text-sky-600">
                                    مشاهده مقاله
                                    <KeyboardBackspaceRoundedIcon fontSize='small' />
                                </Link>
                            </AccordionActions>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                در باب نویسنده
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className=" text-sky-900 line-clamp-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </AccordionDetails>
                            <AccordionActions>
                                <Link
                                    to={'/article'}
                                    className="flex items-center gap-x-1.5 text-sm cursor-pointer text-sky-600">
                                    مشاهده مقاله
                                    <KeyboardBackspaceRoundedIcon fontSize='small' />
                                </Link>
                            </AccordionActions>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                در باب انتشارات
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className=" text-sky-900 line-clamp-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </AccordionDetails>
                            <AccordionActions>
                                <Link
                                    to={'/article'}
                                    className="flex items-center gap-x-1.5 text-sm cursor-pointer text-sky-600">
                                    مشاهده مقاله
                                    <KeyboardBackspaceRoundedIcon fontSize='small' />
                                </Link>
                            </AccordionActions>
                        </Accordion>
                    </div>

                </div>
                {/* ends of details box*/}

                {/* starts of suggestion box*/}
                <div className="col-start-1 lg:col-end-4 lg:row-start-3 col-end-8 row-start-4 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4">

                    <h3 className="text-slate-700 text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 dark:text-white bg-white absolute transition-all">
                        محصولات مشابه
                    </h3>

                    <div className={`w-[90%] mt-16 mb-4 mx-auto`}>
                        <div className="lg:block sm:hidden">
                            <Swiper
                                grabCursor={true}
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        shadow: false,
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                autoplay={{
                                    delay: 2800,
                                    disableOnInteraction: false,
                                }}
                                modules={[EffectCreative, Autoplay]}
                                className="lg:w-[20vw] w-[70vw] rounded-2xl"
                            >
                                <SwiperSlide>
                                    <ProductBox suggest={true} box={false} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductBox suggest={true} box={false} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductBox suggest={true} box={false} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductBox suggest={true} box={false} />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="justify-center flex-wrap gap-4 lg:hidden sm:flex hidden">
                            <div className="sm:w-40 w-52">
                                <ProductBox box={false} />
                            </div>
                            <div className="sm:w-40 w-52">
                                <ProductBox box={false} />
                            </div>
                            <div className="sm:w-40 w-52">
                                <ProductBox box={false} />
                            </div>
                            <div className="sm:w-40 w-52">
                                <ProductBox box={false} />
                            </div>

                        </div>
                    </div>

                </div>
                {/* ends of suggestion box*/}

                {/* starts of comments box*/}
                <div className="lg:col-start-4 col-start-1 col-end-8 lg:row-start-3 row-start-5 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4">
                    <h3 className="text-slate-700 text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 dark:text-white bg-white absolute transition-all">
                        ثبت دیدگاه
                    </h3>
                    <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-center gap-6">
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
                    <div className="border-sky-100 mt-4 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-center gap-6">
                        <label className="" htmlFor='commentsTitle'>عنوان دیدگاه</label>
                        <input type="text" className='py-2 pl-4 pr-6 rounded border-2 focus:shadow-cs border-solid outline-none border-sky-400 bg-sky-50 placeholder:text-gray-500' id='commentsTitle' placeholder='مثال: کیفیت محصول' />
                    </div>
                    <div className="border-sky-100 mt-4 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-start gap-6">
                        <label className="" htmlFor='commentsBody'>محتوا دیدگاه</label>
                        <textarea name="" id="commentsBody" cols="30" rows="4" className='py-2 lg:w-fit w-full pl-4 pr-6 rounded border-2 focus:shadow-cs border-solid outline-none border-sky-400 bg-sky-50 placeholder:text-gray-500' placeholder='مثال: محصول کیفیت مطلوب را ...' ></textarea>
                    </div>
                    <button className={`py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>ثبت دیدگاه</button>
                </div>
                {/* ends of comments box*/}

                {/* starts of comments box */}
                {/* <div className="col-start-1 col-end-8 row-start-4 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4">
                    <h3 className="text-slate-700 text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 dark:text-white bg-white absolute transition-all">
                        نطرات دیگران
                    </h3>
                    <div className="flex gap-6 overflow-x-scroll w-[80vw] mx-auto px-4">
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs p-4 outline-[4px] outline border-2 border-solid rounded-xl flex flex-col gap-1">
                            <div className="flex justify-between gap-6 border-b border-solid border-gray-300 pb-2">
                                <p className="">جواد ملکیان</p>
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
                                    dir='ltr'
                                    readOnly
                                />
                            </div>
                            <p className=" text-start mt-3 font-bold">کیفیت محصول</p>
                            <p className="">محصول از کیفیت کافی برخوردار بود و از آن کاملا راضی هستم</p>
                        </div>
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs p-4 outline-[4px] outline border-2 border-solid rounded-xl flex flex-col gap-1 w-72">
                            <div className="flex justify-between gap-6 border-b border-solid border-gray-300 pb-2">
                                <p className="">جواد ملکیان</p>
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
                                    dir='ltr'
                                    readOnly
                                />
                            </div>
                            <p className=" text-start mt-3 font-bold">کیفیت محصول</p>
                            <p className="">محصول از کیفیت کافی برخوردار بود و از آن کاملا راضی هستم</p>
                        </div>
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs p-4 outline-[4px] outline border-2 border-solid rounded-xl flex flex-col gap-1 w-72">
                            <div className="flex justify-between gap-6 border-b border-solid border-gray-300 pb-2">
                                <p className="">جواد ملکیان</p>
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
                                    dir='ltr'
                                    readOnly
                                />
                            </div>
                            <p className=" text-start mt-3 font-bold">کیفیت محصول</p>
                            <p className="">محصول از کیفیت کافی برخوردار بود و از آن کاملا راضی هستم</p>
                        </div>
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs p-4 outline-[4px] outline border-2 border-solid rounded-xl flex flex-col gap-1 w-72">
                            <div className="flex justify-between gap-6 border-b border-solid border-gray-300 pb-2">
                                <p className="">جواد ملکیان</p>
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
                                    dir='ltr'
                                    readOnly
                                />
                            </div>
                            <p className=" text-start mt-3 font-bold">کیفیت محصول</p>
                            <p className="">محصول از کیفیت کافی برخوردار بود و از آن کاملا راضی هستم</p>
                        </div>
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs p-4 outline-[4px] outline border-2 border-solid rounded-xl flex flex-col gap-1 w-72">
                            <div className="flex justify-between gap-6 border-b border-solid border-gray-300 pb-2">
                                <p className="">جواد ملکیان</p>
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
                                    dir='ltr'
                                    readOnly
                                />
                            </div>
                            <p className=" text-start mt-3 font-bold">کیفیت محصول</p>
                            <p className="">محصول از کیفیت کافی برخوردار بود و از آن کاملا راضی هستم</p>
                        </div>
                        <div className="border-sky-100 mt-16 bg-white outline-white shadow-cs p-4 outline-[4px] outline border-2 border-solid rounded-xl flex flex-col gap-1 w-72">
                            <div className="flex justify-between gap-6 border-b border-solid border-gray-300 pb-2">
                                <p className="">جواد ملکیان</p>
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
                                    dir='ltr'
                                    readOnly
                                />
                            </div>
                            <p className=" text-start mt-3 font-bold">کیفیت محصول</p>
                            <p className="">محصول از کیفیت کافی برخوردار بود و از آن کاملا راضی هستم</p>
                        </div>

                    </div>
                </div> */}
                {/* ends of comments box */}

            </div>
        </>
    );
}

export default Product;