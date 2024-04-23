import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

function ReplyBox({img , txt , name , position , date}) {
    return (
        <>
            <div className="w-full bg-sky-100 dark:bg-slate-600 p-4 rounded-xl text-slate-700 dark:text-white">
                <div className="flex items-center gap-2 pb-4 border-b border-solid border-slate-400">
                    <img src="" alt="" className={`${img ? 'block' : 'hidden'}`} />
                    <div className={`${img ? 'hidden' : 'block'} text-slate-500 dark:text-white transition-all`}>
                        <AccountCircleTwoToneIcon sx={{ fontSize: '4rem' }} />
                    </div>
                    <div className="">
                        <p className="">{name} <span className=' font-bold'>| {position}</span></p>
                        <p className="text-sm text-slate-500 dark:text-white transition-all">{date}</p>
                    </div>
                </div>
                <p className="mt-6">
                   {txt}
                </p>
            </div>
        </>
    );
}

export default ReplyBox;