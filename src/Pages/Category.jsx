import BoxHeader from "../Components/Boxes/BoxHeader";
import ProductBox from "../Components/Boxes/ProductBox";
import PaginationBox from "../Components/Boxes/PaginationBox";

function Category({ header, txt2 }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>
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
                    <li key={i} className="sm:w-52 w-72">
                        <ProductBox box={false} />
                    </li>
                ))}
            </ul>

            <PaginationBox/>
        </>
    );
}

export default Category;