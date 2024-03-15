import { IconButton } from "@mui/material";
import BoxHeader from "../Components/Boxes/BoxHeader";
import ProductBox from "../Components/Boxes/ProductBox";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';

function GroupPage({ header, txt2 }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>
            <BoxHeader
                title={header}
                txt1={'خلاقیت خود را متمرکز کنید'}
                txt2={txt2}
                color={"gr1"}
                all={false}
            />

            <div className="flex justify-between items-center w-[82vw] mx-auto font-[vazir] mt-10">

                <select name="مرتب‌سازی" id="" className="p-2 outline-sky-200 outline-4 outline border-1 border-solid border-white dark:border-slate-800 transition-all outline-none bg-sky-200 rounded-md text-slate-700">
                    <option value="">پیش فرض</option>
                    <option value="">ارزانترین‌ها</option>
                    <option value="">گرانترین‌ها</option>
                    <option value="">تازه‌ترین‌ها‌</option>
                    <option value="">محبوبیت</option>
                </select>

                <div className="outline-sky-200 outline-4 outline border-2 border-solid border-white dark:border-slate-800 transition-all flex justify-center items-center gap-2 bg-sky-200 w-fit rounded-md">
                    <div className="text-slate-700">
                        <input type="text" className="py-1 px-2 outline-none rounded-md bg-sky-200 placeholder:text-slate-600 w-28 sm:hidden" placeholder="جستوجو" />
                        <input type="text" className="py-1 px-2 outline-none rounded-md bg-sky-200 placeholder:text-slate-600 hidden sm:block " placeholder="جستوجوی محصولات" />
                    </div>
                    <div className="">
                        <IconButton sx={{ color: '#486076' }}>
                            <SearchRoundedIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-[3.5rem] w-[82vw] mx-auto mt-16">
                {list.map(i => (
                    <li key={i} className="sm:w-52 w-72">
                        <ProductBox box={false} />
                    </li>
                ))}
            </ul>

            <div className="flex justify-center mt-20 ">
                <Stack spacing={2}>
                    <Pagination count={3} variant="outlined" color="primary" size="large"
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </div>
        </>
    );
}

export default GroupPage;