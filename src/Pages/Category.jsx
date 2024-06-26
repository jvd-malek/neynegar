import BoxHeader from "../Components/Boxes/BoxHeader";
import ProductBox from "../Components/Boxes/ProductBox";
import PaginationBox from "../Components/Boxes/PaginationBox";
import ArticleBox from "../Components/Boxes/ArticleBox";

function Category({ header, txt2, article = false }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="mt-32">
            <BoxHeader
                title={header}
                txt1={'خلاقیت خود را متمرکز کنید'}
                txt2={txt2}
                color={"gr1"}
                all={false}
                searchBar={true}
            />

            <ul className="flex flex-wrap justify-center gap-[3.5rem] w-[82vw] mx-auto mt-16">
                {list.map(i => (
                    <li key={i} className={`${article ? '':"sm:w-52 w-72"}`}>
                        {article ?
                            <ArticleBox />
                            :
                            <ProductBox box={false} category={true}/>
                        }
                    </li>
                ))}
            </ul>

            <PaginationBox />
        </div>
    );
}

export default Category;