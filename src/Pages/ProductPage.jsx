import { Box, IconButton } from '@mui/material';
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
import { Link } from 'react-router-dom';
import CommentInput from '../Components/Comment/CommentInput';
import SuggestionBox from '../Components/Boxes/SuggestionBox';

import { Connect } from 'react-redux';
import { addProductAction } from '../Redux/Product'
import CommentBox from '../Components/Comment/CommentBox';

function Product(props) {
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
            <div className="sm:w-[85vw] w-[98vw] mx-auto mt-32 grid gap-10 relative">

                {/* fixed buy button */}
                <div className="fixed bottom-0 left-1/2 -translate-x-1/2 shadow-css sm:hidden w-full bg-sky-100 dark:bg-slate-600 rounded-t-2xl p-4 text-center z-50">

                <button className={`transition-all duration-75 dark:active:border-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900 py-2.5 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>اضافه به سبد خرید</button>

                </div>

                {/* starts of products images */}
                <div className="col-start-1 lg:col-end-4 col-end-8 row-start-1 lg:row-end-3 w-full bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4 flex flex-col justify-between dark:text-white">

                    <div className="lg:block md:flex block gap-8">
                        <div className="rounded-xl outline-[4px] outline border-2 border-solid py-8 pl-6 pr-12 border-sky-100 dark:border-slate-600 shadow-cs bg-white outline-white relative w-fit mx-auto lg:mb-0 md:mb-4">
                            <img src={img} alt="" className="w-72 h-96 object-contain rounded-xl" />

                            <div className=" absolute top-10 right-1">
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <FavoriteRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 dark:bg-slate-600 dark:text-white bg-sky-200 shadow-md rounded-lg text-sky-900">اضافه به علاقه‌مندی‌ها</p>
                                </div>
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <NotificationsActiveRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 dark:bg-slate-600 dark:text-white bg-sky-200 shadow-md rounded-lg text-sky-900">اطلاع‌رسانی شگفت‌انگیز‌ها</p>
                                </div>
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <ShareRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 dark:bg-slate-600 dark:text-white bg-sky-200 shadow-md rounded-lg text-sky-900">اشتراک‌گذاری محصول</p>
                                </div>
                                <div className="[&>p]:hover:block relative">
                                    <IconButton onClick={() => Handler()} color='primary'>
                                        <CommentRoundedIcon />
                                    </IconButton>
                                    <p className=" absolute top-1/2 -translate-y-1/2 right-12 hidden text-nowrap py-1 px-2 dark:bg-slate-600 dark:text-white bg-sky-200 shadow-md rounded-lg text-sky-900">ثبت دیدگاه</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[17rem] mx-auto flex flex-col justify-between">
                            <div className="flex justify-between gap-2 border-sky-100 dark:border-slate-600 mt-8 bg-white outline-white shadow-cs py-2 px-4 outline-[4px] outline border-2 border-solid rounded-xl  h-fit">
                                <img src="./Imgs/book2.jpg" alt="" className="w-20 h-24 object-contain cursor-pointer rounded-lg" onClick={e => setImg(e.target.src)} />
                                <img src="./Imgs/book1.jpg" alt="" className="w-20 h-24 object-contain cursor-pointer rounded-lg" onClick={e => setImg(e.target.src)} />
                                <img src="./Imgs/color2.png" alt="" className="w-20 h-24 object-contain cursor-pointer rounded-lg" onClick={e => setImg(e.target.src)} />
                            </div>
                            <div className=" w-[90%] text-center mx-auto mt-12 mb-8 lg:hidden md:block hidden ">
                                <p className="">
                                    در صورت هرگونه سوال در مورد این محصول <br />با ما تماس بگیرید <span className="">:)</span>
                                </p>
                                <button className={`transition-all duration-75 dark:active:border-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900 py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>تماس با ما</button>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[90%] text-center mx-auto mt-12 mb-4 lg:block md:hidden">
                        <p className="">
                            در صورت هرگونه سوال در مورد این محصول <br />با ما تماس بگیرید <span className="">:)</span>
                        </p>
                        <button className={`transition-all duration-75 dark:active:border-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900 py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>تماس با ما</button>
                    </div>


                </div>
                {/* ends of products images */}

                {/* starts of products details*/}
                <div className="lg:col-start-4 col-start-1 col-end-8 lg:row-start-1 lg:row-end-2 row-start-2 w-full bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:bg-slate-600 dark:outline-slate-600 dark:text-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4 flex flex-col justify-between">
                    <div className="">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
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
                        <div className="border-sky-100 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500 mt-7 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl grid gap-6 items-center justify-between">
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
                        <button className={`transition-all duration-75 dark:active:border-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900 py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1`}>اضافه به سبد خرید</button>
                    </div>
                </div>
                {/* ends of products details*/}

                {/* starts of details box*/}
                <div className="lg:col-start-4 col-start-1 col-end-8 lg:row-start-2 lg:row-end-3 row-start-3 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-9 pb-4 px-6 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">

                    <h3 className="absolute top-4 -right-2 bg-white text-slate-700 text-xl font-bold rounded-l-xl pr-6 pl-4 py-2 dark:bg-slate-800 dark:text-white transition-all">مشخصات</h3>

                    <div className='mt-10'>
                        <Accordion defaultExpanded>
                            <div className='dark:bg-slate-400 dark:text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    در باب محصول
                                </AccordionSummary>
                            </div>
                            <div className="dark:bg-slate-400">
                                <AccordionDetails>
                                    <p className=" text-sky-900 line-clamp-2 dark:text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </p>
                                </AccordionDetails>
                            </div>
                            <div className="dark:bg-slate-400">
                                <AccordionActions>
                                    <Link
                                        to={'/article'}
                                        className="flex items-center gap-x-1.5 cursor-pointer text-sm text-sky-600 dark:text-white"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                        مشاهده مقاله
                                        <div className="dark:text-slate-600">
                                            <KeyboardBackspaceRoundedIcon fontSize='small' />
                                        </div>
                                    </Link>
                                </AccordionActions>
                            </div>
                        </Accordion>
                        <Accordion>
                            <div className='dark:bg-slate-400 dark:text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    در باب نویسنده
                                </AccordionSummary>
                            </div>
                            <div className='dark:bg-slate-400'>
                                <AccordionDetails>
                                    <p className=" text-sky-900 line-clamp-2 dark:text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </p>
                                </AccordionDetails>
                            </div>
                            <div className='dark:bg-slate-400'>
                                <AccordionActions>
                                    <Link
                                        to={'/article'}
                                        className="flex items-center gap-x-1.5 text-sm cursor-pointer text-sky-600 dark:text-white"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                        مشاهده مقاله
                                        <div className="dark:text-slate-600" >
                                            <KeyboardBackspaceRoundedIcon fontSize='small' />
                                        </div>
                                    </Link>
                                </AccordionActions>
                            </div>
                        </Accordion>
                        <Accordion>
                            <div className='dark:bg-slate-400 dark:text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    در باب انتشارات
                                </AccordionSummary>
                            </div>
                            <div className='dark:bg-slate-400'>
                                <AccordionDetails>
                                    <p className=" text-sky-900 line-clamp-2 dark:text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </p>
                                </AccordionDetails>
                            </div>
                            <div className='dark:bg-slate-400'>
                                <AccordionActions>
                                    <Link
                                        to={'/article'}
                                        className="flex items-center gap-x-1.5 text-sm cursor-pointer text-sky-600 dark:text-white"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                        مشاهده مقاله
                                        <div className="dark:text-slate-600">
                                            <KeyboardBackspaceRoundedIcon fontSize='small' />
                                        </div>
                                    </Link>
                                </AccordionActions>
                            </div>
                        </Accordion>
                    </div>

                </div>
                {/* ends of details box*/}

                {/* starts of suggestion box*/}
                <div className="col-start-1 lg:col-end-4 lg:row-start-3 col-end-8 row-start-4 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">
                    <SuggestionBox />
                </div>
                {/* ends of suggestion box*/}

                {/* starts of comments box*/}
                <div className="lg:col-start-4 col-start-1 col-end-8 lg:row-start-3 row-start-5 w-full relative bg-sky-100 outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4 dark:bg-slate-600 dark:outline-slate-600 dark:text-white">
                    <CommentInput />
                </div>
                {/* ends of comments box*/}

                {/* starts of comments box */}
                <div className="col-start-1 col-end-8 lg:row-start-4 row-start-6 w-full relative bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 dark:text-white outline-sky-100 outline-[6px] outline border-2 border-solid border-white dark:border-slate-800 transition-all rounded-xl pt-10 pb-4 px-4">
                    <CommentBox />
                </div>
                {/* ends of comments box */}

            </div>
        </>
    );
}
// const mapState = (state) => (
//     { state }
// )

// const mapDispatch = (dispatch) => {
//     let title = 'jvd'
//     let price = 1000
//     return { add: () => dispatch(title, price) }
// }

export default Product;