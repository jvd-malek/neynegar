import CMSForm from '../Components/CMS/CMSForm';
import CMSBox from '../Components/CMS/CMSBox';


function CmsChild({ type }) {
    return (
        <>
            {type === 'home' &&
                <>
                    {/* product section start */}
                    <CMSBox type={type} />
                    {/* product section end */}
                </>
            }

            {type === 'products' &&
                <>

                    {/* add product section start */}
                    <div className="bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 transition-all outline-sky-100 outline-[6px] outline border-x-2 border-y-2 border-solid relative border-white dark:border-slate-800 rounded-xl p-4 col-start-2 col-end-5 row-start-1 ">
                        <h3 className="text-lg font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 text-slate-700  dark:text-white bg-white absolute transition-all">
                            ثبت محصول
                        </h3>
                        <CMSForm />
                    </div>
                    {/* add product section end */}

                    {/* product section start */}
                    <CMSBox type={type} />
                    {/* product section end */}

                </>
            }

            {type === 'articles' &&
                <>
                    {/* add product section start */}
                    <div className="bg-sky-100 dark:bg-slate-600 dark:outline-slate-600 transition-all outline-sky-100 outline-[6px] outline border-x-2 border-y-2 border-solid relative border-white dark:border-slate-800 rounded-xl p-4 col-start-2 col-end-5 row-start-1 ">
                        <h3 className="text-lg font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 text-slate-700  dark:text-white bg-white absolute transition-all">
                            ثبت محصول
                        </h3>
                        <CMSForm article={true} />
                    </div>
                    {/* add product section end */}

                    {/* product section start */}
                    <CMSBox type={type} />
                    {/* product section end */}

                </>
            }
            {type === 'comments' &&
                <>
                    {/* product section start */}
                    <CMSBox type={type} />
                    {/* product section end */}

                </>
            }
            {type === 'orders' &&
                <>
                    {/* product section start */}
                    <CMSBox type={type} />
                    {/* product section end */}

                </>
            }
            {type === 'discounts' && 'discounts'}
        </>
    );
}

export default CmsChild;