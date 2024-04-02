import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CssBaseline, IconButton, ThemeProvider, createTheme } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Link } from 'react-router-dom';

// font family for mui elements
const theme = createTheme({
    typography: {
        fontFamily: 'vazir',
    }
})
// rtl the mui elements
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function Login({isLogin}) {

    const [num, setNum] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [sendPass, setSendPass] = useState(false)
    const [isSingUP, setSignUP] = useState(!isLogin)

    const numHandler = e => {
        setNum(e.target.value)
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    const nameHandler = e => {
        setName(e.target.value)
    }


    return (
        <div className="flex justify-center items-center w-full h-screen font-[vazir] dark:bg-slate-800">
            <img src="./Imgs/login.jpg" alt="" className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <div className="bg-dark-glass w-full h-full flex justify-center items-center">
                <div className="sm:h-[80vh] h-[60vh] sm:max-w-[25rem] w-[85vw] mx-6 rounded-3xl overflow-hidden relative">
                    <Link to={'/'} className='absolute top-4 right-4 z-20'>
                        <IconButton color='primary'>
                            <ClearRoundedIcon />
                        </IconButton>
                    </Link>
                    <div className={isSingUP ?
                        " absolute -top-full transition-all duration-700 ease-in-out w-full pt-8 px-8 text-lg text-sky-600 text-center flex flex-col justify-between bg-white dark:bg-slate-200 h-full" :
                        " absolute top-0 transition-all duration-700 ease-in-out w-full pt-8 px-8 text-lg text-sky-600 text-center flex flex-col justify-between bg-white dark:bg-slate-200 h-full"}>
                        <h2>ورود به حساب کاربری</h2>
                        <div className="flex flex-col gap-5" dir='rtl'>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <CacheProvider value={cacheRtl}>
                                    <TextField label="شماره تلفن" required variant="standard" />
                                    <TextField label="رمز عبور" required variant="standard" />
                                    <button className={`py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-white text-white border-b-4 border-solid active:translate-y-1`}>دریافت رمز عبور</button>
                                    </CacheProvider>
                            </ThemeProvider>
                            <h3 className="text-base mb-4">کاربر جدید هستید؟
                                <span className=" text-sky-800 cursor-pointer" onClick={() => setSignUP(true)}> ثبت‌نام</span>
                            </h3>
                        </div>
                    </div>
                    <div className={isSingUP ?
                        " absolute bottom-0 transition-all duration-700 ease-in-out w-full pt-8 px-8 text-lg text-sky-600 text-center flex flex-col justify-between bg-white dark:bg-slate-200 h-full" :
                        " absolute -bottom-full transition-all duration-700 ease-in-out w-full pt-8 px-8 text-lg text-sky-600 text-center flex flex-col justify-between bg-white dark:bg-slate-200 h-full"}>
                        <h2>ایجاد حساب کاربری</h2>
                        <div className="flex flex-col gap-4" dir='rtl'>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <CacheProvider value={cacheRtl}>
                                    <TextField label="نام و نام‌خانوادگی" required variant="standard" />
                                    <TextField label="شماره تلفن" required variant="standard" />
                                    <TextField label="رمز عبور" required variant="standard" />
                                    <button className={`py-2.5 mt-6 w-full rounded-full bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-white text-white border-b-4 border-solid active:translate-y-1`}>دریافت رمز عبور</button>
                                </CacheProvider>
                            </ThemeProvider>
                            <h3 className="text-base mb-4">قبلا ثبت‌نام کرده‌اید؟
                                <span className=" text-sky-400 cursor-pointer" onClick={() => setSignUP(false)}> ورود</span>
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;