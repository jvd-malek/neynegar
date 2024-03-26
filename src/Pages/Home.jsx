import Box from '../Components/Boxes/Box';
import BoxHeader from '../Components/Boxes/BoxHeader';
import DiscountBox from '../Components/Boxes/DiscountBox';
import CaligraphyComponentes from '../Components/Boxes/CaligraphyComponentes';
import ArticleBox from '../Components/Boxes/ArticleBox';

function Home() {
    return (
        <>
            <div className="lg:hidden ">
                <BoxHeader
                    title={'محصولات شگفت‌انگیز'}
                    txt1={'خلاقیت خود را متمرکز کنید'}
                    txt2={'فروش محصولات خوشنویسی خاص'}
                    color={"bg-sky-400"}
                />
            </div>

            <DiscountBox />

            <BoxHeader
                title={'محصولات خوشنویسی'}
                txt1={'خلاقیت خود را متمرکز کنید'}
                txt2={'فروش محصولات خوشنویسی خاص'}
                color={"gr1"}
                all={false}
            />

            <CaligraphyComponentes />

            <BoxHeader
                title={'تازه‌ترین محصولات خوشنویسی'}
                color={"gr1"}
                link="/caligraphic-product"
            />

            <div className="mt-10">
                <Box color={"gr11"} />
            </div>

            <BoxHeader
                title={'محصولات نقاشی و طراحی'}
                color={"gr4"}
                link="/painting-product"
            />

            <div className="mt-10">
                <Box color={"gr44"} />
            </div>

            <BoxHeader
                title={'محصولات هنر‌های سنتی (تذهیب و ...)'}
                color={"gr2"}
                link="/traditional-product"
            />

            <div className="mt-10">
                <Box color={"gr22"} />
            </div>

            <BoxHeader
                title={'آخرین مقالات'}
                color={"gr1"}
                link="/articles"
            />

            <div className="mt-16 mx-auto w-[82vw] flex flex-wrap gap-10 justify-center">
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
            </div>

        </>
    );
}

export default Home;