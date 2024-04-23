import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ReplyBox from './ReplyBox';

function CommentBox({ account = false, ticket = false }) {
    const [img, setImg] = useState('../../Imgs/book1.jpg')
    const [reply, setReply] = useState(1)

    return (
        <>
            {
                !account && !ticket && 
                <h3 className="text-slate-700 text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 dark:text-white bg-white absolute transition-all ">
                    نظرات
                </h3>
            }
            <div className={`border-sky-100 ${account || ticket ? 'mt-10' : 'mt-16'} mb-6 bg-white outline-white shadow-cs py-4 px-6 outline-[4px] outline border-2 border-solid rounded-xl flex flex-wrap justify-between items-center gap-6 dark:border-slate-600 dark:bg-slate-500 dark:outline-slate-500`}>
                <div className="flex justify-between items-center w-full pb-4 border-b border-solid dark:border-slate-400">
                    <div className="flex items-center gap-2">

                        <img src={img} alt="" className={`${img ? 'block' : 'hidden'} object-cover ${account ? 'rounded-md w-20 h-20' : 'w-16 h-16 rounded-full'}`} />
                        {
                            !account &&
                            <div className={`${img ? 'hidden' : 'block'} text-slate-500 dark:text-white transition-all`}>
                                <AccountCircleTwoToneIcon sx={{ fontSize: '4rem' }} />
                            </div>
                        }
                        <div className="">
                            {
                                !account ?
                                    <>
                                        <p className={`${ticket ? 'hidden' : 'block'}`}>اصغر شاهرودی <span className=' font-bold'>| کاربر</span></p>
                                        <p className={`${ticket ? 'block' : 'hidden'}`}>پرسش شما</p>
                                    </>
                                    :
                                    <p className="">
                                        دیدگاه شما در باب
                                        سرو سایه فکن
                                    </p>
                            }

                            <p className="text-sm text-slate-500 dark:text-white transition-all">1402/03/15</p>
                        </div>
                    </div>
                    {
                        !ticket &&
                        <div className=" dark:bg-slate-400 bg-sky-200 rounded-full transition-all">
                            <IconButton>
                                <ReplyRoundedIcon />
                            </IconButton>
                        </div>
                    }
                </div>
                <p className="">
                    سلام ممنون از سایت خوبتون
                    <br />
                    راجب این محصول یکم بیشتر توضیح میدین
                </p>
                {reply &&
                    <>
                        <ReplyBox img={img}
                            txt={` این محصول قطع رحلی نفیس بوده که بخط استاد فلان می‌باشد\n اگر قصد سفارش دارین با ما در تماس باشین.`}
                            name=' جواد ملکیان'
                            position=' ادمین'
                            date='1402/03/15'
                        />
                    </>
                }
            </div>
        </>
    );
}

export default CommentBox;