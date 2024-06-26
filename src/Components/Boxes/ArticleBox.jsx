import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from 'react-router-dom';


function ArticleBox() {
    return (
        <>
            <div className={`flex flex-col font-[vazir] overflow-hidden gr1 shadow-css dark:shadow-none rounded-2xl max-w-72 dark:gr2dark`}>
                <img className=" border-b-2 border-solid border-slate-800 rounded-2xl" src="./Imgs/p1.jpg" alt="دوره پروژه محور متخصص جنگو" />
                <div className="px-4 pt-2.5 pb-4 flex-grow border-b border-b-gray-100 dark:border-b-gray-700">
                    <p className={`text-sm h-10 line-clamp-2 text-slate-800 dark:text-white`}>سرو سایه فکن : درباره فردوسی و شاهنامه خوشنویسی: امیرخانی</p>
                </div>

                <div className="flex items-end justify-between mt-1.5 px-5 pb-2 text-sm text-slate-800 dark:text-white">
                    <span className=" space-x-1.5">
                        امیرخانی
                    </span>
                    <Link
                        to={'/article'}
                        className="flex items-center gap-x-1.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        مشاهده مقاله
                        <span className="text-slate-700 dark:text-white">
                            <KeyboardBackspaceRoundedIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ArticleBox;