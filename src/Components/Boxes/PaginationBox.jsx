import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function PaginationBox({basket = false}) {
    return (
        <div className={`p-1 outline-[4px] outline border-2 border-solid ${basket ? 'border-sky-100 mt-10 bg-sky-50 outline-sky-50  shadow-css': 'mt-20 border-white bg-sky-200 outline-sky-200 dark:border-slate-800'} transition-all rounded-full w-fit mx-auto`}>
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
    );
}

export default PaginationBox;