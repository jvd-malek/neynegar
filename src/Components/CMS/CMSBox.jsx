import { IconButton, Modal } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import ChromeReaderModeRoundedIcon from '@mui/icons-material/ChromeReaderModeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import PaginationBox from '../Boxes/PaginationBox'
import { useState } from "react";

function CMSBox({ type }) {

    const [img, setImg] = useState((type === 'products' || type === 'articles') ? '../../Imgs/book1.jpg' : null)
    const [search, setSearch] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)
    const count = [1, 2, 3, 4]
    const searchHandler = e => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className={`bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 transition-all outline-sky-100 outline-[6px] outline border-x-2 border-y-2 border-solid relative border-white dark:border-slate-800 rounded-xl p-4 col-start-2 col-end-5 pt-20`}>

                <h3 className="text-lg font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 text-slate-700  dark:text-white bg-white absolute transition-all">
                    {type === 'home' && 'محصولات'}
                    {type === 'products' && 'محصولات'}
                    {type === 'articles' && 'مقالات'}
                    {type === 'comments' && "کامنت‌ها"}
                    {type === 'orders' && "سفارشات"}
                </h3>

                {/* searchBox start */}
                <div className="flex justify-center absolute top-6 left-6 items-center gap-2 bg-sky-200 dark:bg-slate-800 transition-all w-fit rounded-lg shadow-md">
                    <div className="text-slate-700">
                        <input type="text"
                            className="py-1 px-4 outline-none rounded-full bg-sky-200 transition-all dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-200 placeholder:text-slate-600 md:w-full sm:w-36"
                            placeholder={
                                (type === 'home' || type === 'products') ? "جستوجو محصولات" :
                                    type === 'articles' ? "جستوجو مقالات"
                                        : type === 'comments' ? "جستوجو کامنت‌ها"
                                            : type === 'orders' && "جستوجو سفارشات"
                            }
                            value={search}
                            onChange={e => searchHandler(e)}
                        />
                    </div>
                    <IconButton >
                        <div className="dark:text-white h-6 -translate-y-1">
                            <SearchRoundedIcon />
                        </div>
                    </IconButton>
                </div>
                {/* searchBox end */}

                {/* (product , article , ...) section start  */}
                {count.map(c => (
                    <div className="mt-5 border-sky-100 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500 bg-white outline-white shadow-cs py-2 px-4 outline-[4px] outline border-2 border-solid rounded-xl flex justify-between items-center gap-3 dark:text-white"
                        key={c}>
                        <img src={img} alt="" className={`${type === 'articles' ? 'w-40 rounded-lg' : 'w-20 rounded-full'} ${type === 'products' && 'rounded-lg'} h-20 object-cover ${img ? 'block' : 'hidden'}`} />
                        <div className={`${img ? 'hidden' : 'block'} text-slate-500 dark:text-white transition-all`}>
                            <AccountCircleTwoToneIcon sx={{ fontSize: '4rem' }} />
                        </div>
                        <h2 className="">سرو سایه فکن</h2>
                        {type === 'articles' &&
                            <p className="">آیدی: <span className='bg-sky-200 dark:bg-slate-600 py-1 px-2 rounded-md'>2</span></p>
                        }
                        {type === 'products' &&
                            <>
                                <p className="">موجودی: <span className='bg-sky-200 dark:bg-slate-600 py-1 px-2 rounded-md'>2</span></p>
                                <p className="">قیمت: <span className='bg-sky-200 dark:bg-slate-600 py-1 px-2 rounded-md'>2,000,000</span></p>
                            </>
                        }
                        <div className="bg-sky-200 dark:bg-slate-600 rounded-md">

                            {type !== 'orders' &&
                                <IconButton onClick={() => setDeleteModal(true)}>
                                    <div className=" w-6 h-6 dark:text-white -translate-y-1">
                                        <EditRoundedIcon />
                                    </div>
                                </IconButton>
                            }

                            {(type !== 'comments' && type !== 'orders') &&
                                <IconButton >
                                    <div className=" w-6 h-6 dark:text-white -translate-y-1">
                                        <AddPhotoAlternateRoundedIcon />
                                    </div>
                                </IconButton>
                            }

                            <IconButton >
                                <div className=" w-6 h-6 dark:text-white -translate-y-1">
                                    <ChromeReaderModeRoundedIcon />
                                </div>
                            </IconButton>

                            <IconButton onClick={() => setDeleteModal(true)}>
                                <div className={`w-6 h-6 ${type !== 'orders' ? 'text-red-500' : 'text-green-500'} -translate-y-1`}>
                                    {type !== 'orders' ?
                                        <DeleteForeverRoundedIcon /> :
                                        <CheckCircleOutlineRoundedIcon />
                                    }
                                </div>
                            </IconButton>

                        </div>
                    </div>
                ))}
                {/* (product , article , ...) section start  */}

                <PaginationBox />
            </div>

            {/* delete modal start */}
            <Modal
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
            >
                <div className=" top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2 w-fit outline-[4px] outline border-2 border-solid border-[rgba(0,0,0,0.4)] rounded-xl p-4 bg-sky-100 outline-sky-100 dark:bg-slate-400 dark:outline-slate-400 font-[vazir]">
                    <p className="">آیا از حذف محصول اطمینان دارید؟</p>
                    <div className=" flex gap-4 justify-center">
                        <button className={`py-2.5 md:mt-6 mt-10 px-6 rounded-full col-start-1 col-end-3 bg-red-500 border-red-400 hover:bg-red-600 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1 transition-all duration-75 dark:active:border-slate-400`}
                            onClick={() => setDeleteModal(false)}
                        >حذف</button><button className={`py-2.5 md:mt-6 mt-10 px-6 rounded-full col-start-1 col-end-3 bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1 transition-all duration-75 dark:active:border-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900`}
                            onClick={() => setDeleteModal(false)}
                        >انصراف</button>
                    </div>
                </div>
            </Modal>
            {/* delete modal end */}

        </>
    );
}

export default CMSBox;