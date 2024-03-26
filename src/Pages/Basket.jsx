import { useState } from 'react';
import BoxHeader from '../Components/Boxes/BoxHeader';
import ProductBox from '../Components/Boxes/ProductBox';
import PaginationBox from '../Components/Boxes/PaginationBox'

function Basket() {
    const [productConf, setProductConf] = useState(true)
    const [infoConf, setInfoConf] = useState(false)
    const [submit, setSubmit] = useState(false)

    const productConfirmation = () => {
        setProductConf(true)
        setInfoConf(false)
        setSubmit(false)
    }
    const infoConfirmation = () => {
        setInfoConf(true)
        setProductConf(false)
        setSubmit(false)
    }
    const submitHandler = () => {
        setSubmit(true)
        setProductConf(false)
        setInfoConf(false)
    }

    return (
        <>
            <BoxHeader
                title={'سبد خرید شما'}
                color={"gr4"}
                all={false}
                searchBar={true}
            />
            <div className="w-[83vw] mx-auto relative mt-16">

                <div className="flex gap-4 sm:justify-start justify-between">
                    <button onClick={() => productConfirmation()} className={`border-x-2 border-t-2 border-solid border-white dark:border-slate-800 outline-sky-100 outline-[6px] outline px-4 py-2.5 bg-sky-100 rounded-t-xl text-zinc-800 transition-all duration-700 ${productConf ? " opacity-100 translate-y-0" : "opacity-60 translate-y-1.5 mb-6 rounded-b-xl border-none"}`}>تایید محصولات</button>
                    <button onClick={() => infoConfirmation()} className={`outline-lime-200 outline-[6px] outline border-x-2 border-t-2 border-solid border-white dark:border-slate-800 px-4 py-2.5 bg-lime-200 rounded-t-xl text-zinc-800 transition-all duration-700  ${infoConf ? " opacity-100 translate-y-0" : "opacity-60 translate-y-1.5 mb-6 rounded-b-xl border-none"}`}>اطلاعات تکمیلی</button>
                    <button onClick={() => submitHandler()} className={`outline-violet-200 outline-[6px] outline border-x-2 border-t-2 border-solid border-white dark:border-slate-800 px-4 py-2.5 bg-violet-200 rounded-t-xl text-zinc-800 transition-all duration-700 ${submit ? " opacity-100 translate-y-0" : "opacity-60 translate-y-1.5 mb-6 rounded-b-xl border-none"}`}>تکمیل خرید</button>
                </div>


                <div className={`bg-sky-100 ${productConf ? " w-full opacity-100 z-10 outline-sky-100 outline-[6px] outline border-x-2 border-y-2 border-solid border-white dark:border-slate-800" : "h-0 opacity-60 w-0 overflow-hidden z-0"} transition-opacity duration-700 rounded-l-xl rounded-b-xl`}>
                    <div className={`sm:w-[90%] w-[12rem] sm:mr-10 pt-16 mx-auto transition-all duration-700 ${productConf ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                        <div className="">
                            <ProductBox box={false} basket={true} />
                        </div>
                        <div className="mt-16">
                            <ProductBox box={false} basket={true} />
                        </div>
                        <div className="mt-16">
                            <ProductBox box={false} basket={true} />
                        </div>
                    </div>
                    <div className="mb-10">
                        <PaginationBox basket={true}/>
                    </div>

                </div>

                <div className={`bg-lime-200 ${infoConf ? "w-full opacity-100 z-10 outline-lime-200 outline-[6px] outline border-x-2 border-y-2 border-solid border-white dark:border-slate-800" : "h-0 opacity-60 w-0 overflow-hidden z-0"} transition-opacity duration-700 rounded-xl`}>
                    <div className={`sm:w-[90%] w-[12rem] sm:mr-10 py-16 mx-auto transition-all duration-700 ${infoConf ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                        sdfsdfsdfsd
                    </div>
                </div>

                <div className={`bg-violet-200 ${submit ? "w-full opacity-100 outline-violet-200 outline-[6px] outline border-x-2 border-y-2 border-solid border-white dark:border-slate-800" : "h-0 opacity-60 w-0 overflow-hidden z-0"} transition-opacity duration-700 sm:rounded-xl rounded-b-xl rounded-r-xl`}>
                    <div className={`sm:w-[90%] w-[12rem] sm:mr-10 py-16 mx-auto transition-all duration-700 ${submit ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                        sdfsdfsdfsd
                    </div>
                </div>

            </div>
        </>
    );
}

export default Basket;