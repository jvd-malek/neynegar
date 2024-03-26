import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function PaginationBox({basket = false}) {
    return (
        <div className={`p-1 mt-20 bg-sky-100 outline-sky-100 outline-[4px] outline border-2 border-solid ${basket ? 'border-sky-100 bg-sky-50 outline-sky-50': 'border-white dark:border-slate-800'}   transition-all rounded-full w-fit mx-auto`}>
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