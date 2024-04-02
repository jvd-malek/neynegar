import { IconButton } from '@mui/material';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import { useState } from 'react';

function Product() {
    const [img , setImg] = useState("./Imgs/book1.jpg")
    const Handler = () => {

    }
    return (
        <>
            <div className="w-[85vw] mx-auto mt-12 grid">
                <div className="flex gap-4 col-start-1 col-end-4 w-full">

                    <div className="dark:bg-sky-200 rounded-full h-fit py-1 mt-10">
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

                    <div className="grid">
                        <img src={img} alt="" className="w-72 h-96 object-contain row-start-1 col-start-1 col-end-4 rounded-xl" />
                        <img src="./Imgs/book2.jpg" alt="" className="w-20 h-24 object-contain row-start-2 col-start-1 p-2 cursor-pointer border border-solid border-slate-500 rounded-md mt-2" onClick={e=>setImg(e.target.src)}/>
                        <img src="./Imgs/book1.jpg" alt="" className="w-20 h-24 object-contain row-start-2 col-start-2 p-2 cursor-pointer border border-solid border-slate-500 rounded-md mt-2" onClick={e=>setImg(e.target.src)}/>
                        <img src="./Imgs/color2.png" alt="" className="w-20 h-24 object-contain row-start-2 col-start-3 p-2 cursor-pointer border border-solid border-slate-500 rounded-md mt-2" onClick={e=>setImg(e.target.src)}/>
                    </div>

                </div>
                <div className="col-start-4 col-end-8 w-full"></div>
                <div className="col-start-8 col-end-12 w-full"></div>
            </div>
        </>
    );
}

export default Product;