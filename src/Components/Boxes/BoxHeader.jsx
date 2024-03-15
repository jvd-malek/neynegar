import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


function BoxHeader({ title, txt1, txt2, color, all = true, link = "/" }) {
    return (
        <>
            <div className="flex items-end sm:items-center justify-between mb-8 gap-4 sm:flex-row flex-col mt-20 mx-auto w-[81vw]">
                <div className="space-y-2.5 self-start">
                    <div className="flex items-baseline gap-x-2.5 sm:gap-x-3.5">
                        <span className={`w-4 h-4 lg:w-6 ${color} rounded-sm`}></span>
                        <h3 className="text-zinc-700 dark:text-white text-2xl font-bold sm:text-3xl">{title}</h3>
                    </div>
                    {txt1 &&
                        <div className="text-slate-500 dark:text-slate-400 sm:text-xl font-[vazir]">
                            <Typewriter
                                options={{
                                    strings: [txt1, txt2],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    }
                </div>
                {all &&
                    <Link to={link} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center w-fit gap-x-1 rounded-xl px-2.5 py-2 text-sky-500 hover:bg-sky-500/10 dark:text-white  transition-colors">
                        <span className="font-[vazir] inline-block">مشاهده همه</span>
                        <KeyboardBackspaceRoundedIcon />
                    </Link>
                }
            </div>
        </>
    );
}

export default BoxHeader;