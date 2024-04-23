import { useState } from "react"

function CMSForm({ article = false }) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [articleBody, setArticleBody] = useState('')
    const [count, setCount] = useState('')
    const [size, setSize] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [weight, setWeight] = useState('')
    const [publisher, setPublisher] = useState('')
    const [price, setPrice] = useState('')
    const [cost, setCost] = useState('')
    const [img, setImg] = useState("")
    const [publishDate, setPublishDate] = useState("")
    const [status, setStatus] = useState('')
    const [discount, setDiscount] = useState('')
    const [product, setProduct] = useState(null)
    const [Article, setArticle] = useState(null)

    const titleHandler = e => {
        setTitle(e.target.value)
    }
    const descHandler = e => {
        setDesc(e.target.value)
    }
    const articleBodyHandler = e => {
        setArticleBody(e.target.value)
    }
    const countHandler = e => {
        setCount(e.target.value)
    }
    const sizeHandler = e => {
        setSize(e.target.value)
    }
    const authorHandler = e => {
        setAuthor(e.target.value)
    }
    const publisherHandler = e => {
        setPublisher(e.target.value)
    }
    const priceHandler = e => {
        setPrice(e.target.value)
    }
    const imgHandler = e => {
        setImg(e.target.value)
    }
    const publishDateHandler = e => {
        setPublishDate(e.target.value)
    }
    const statusHandler = e => {
        setStatus(e.target.value)
    }
    const weightHandler = e => {
        setWeight(e.target.value)
    }
    const discountHandler = e => {
        setDiscount(e.target.value)
    }
    const categoryHandler = e => {
        setCategory(e.target.value)
        setBrand('')
    }
    const brandHandler = e => {
        setBrand(e.target.value)
    }
    const costHandler = e => {
        setCost(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        if (!article) {
            let product = {
                title: title,
                desc: desc,
                price: +price,
                cost: +cost,
                count: +count,
                discount: +discount,
                category: category,
                brand: brand,
                author: author,
                publisher: publisher,
                img: img,
                publishDate: publishDate,
                size: size,
                weight: +weight,
                status: status
            }
            setProduct(product)
            setCount('')
            setSize("")
            setPublisher("")
            setPrice('')
            setPublishDate("")
            setStatus("")
            setDiscount('')
            setWeight('')
            setCategory("")
            setBrand('')
            setCost('')
        } else {
            let article = {
                title: title,
                desc: desc,
                price: +price,
                cost: +cost,
                count: +count,
                discount: +discount,
                category: category,
                brand: brand,
                author: author,
                publisher: publisher,
                img: img,
                publishDate: publishDate,
                size: size,
                weight: +weight,
                status: status
            }
            setArticle(article)
        }
        setTitle("")
        setDesc("")
        setAuthor("")
        setImg("")
        setArticleBody("")
    }

    const categories = [
        { cat: "قلم‌نی", brand: ["دزفولی", "شمالی", "خیزران", "متفرقه"] },
        { cat: "کتاب", brand: ["خوشنویسی", "رمان", "نقاشی", "هنرهای سنتی", "متفرقه"] },
        { cat: "قطع‌زن", brand: ["سه‌تیکه", "دوتیکه", "عناب", "استخوان", "پی", "متفرقه"] },
        { cat: "مرکب", brand: ["امیران", "نی‌نگار", "اشمینگ", "خشک", "طاهر", "وارش", "ساج", "خط‌سوم", "سمغ", "مکمل", "متفرقه"] },
        { cat: "کاغذ", brand: ["مات", "براق", "برزیلی", "متفرقه"] },
        { cat: "قلم‌تراش", brand: ["جواد توسلی", "باقر وفا", "متفرقه"] },
    ]

    return (
        <>
            <form action="" className="grid grid-cols-2 gap-y-4 gap-x-4 mt-20 dark:text-white w-[90%] mx-auto" onSubmit={(e) => submitHandler(e)}>

                <div className="flex items-center justify-between w-80">
                    <label htmlFor="name" className="">
                        {article ? 'نام مقاله' : "نام محصول"}
                    </label>
                    <input value={title} onChange={e => titleHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="name" required />
                </div>

                <div className="flex items-center justify-between gap-4 w-80">
                    <label htmlFor="desc" className="">
                        {article ? 'مقدمه' : "توضیحات"}
                    </label>
                    <textarea value={desc} onChange={e => descHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="desc" required />
                </div>

                {!article ?
                    <>
                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="cost" className="">قیمت خرید</label>
                            <input value={cost} onChange={e => costHandler(e)} type="number" className=" rounded text-black py-2 px-4 w-2/3" id="cost" required />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="price" className="">قیمت فروش</label>
                            <input value={price} onChange={e => priceHandler(e)} type="number" className=" rounded text-black py-2 px-4 w-2/3" id="price" required />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="count" className="">تعداد</label>
                            <input value={count} onChange={e => countHandler(e)} type="number" className=" rounded text-black py-2 px-4 w-2/3" id="count" required />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="discount" className="">تخفیف</label>
                            <input value={discount} onChange={e => discountHandler(e)} type="number" className=" rounded text-black py-2 px-4 w-2/3" id="discount" />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="category" className="">دسته‌بندی</label>
                            <select value={category} onChange={e => categoryHandler(e)} name="دسته‌بندی" id="category" className="text-black w-2/3 py-2 px-4 rounded">
                                <option value="">__ انتخاب کنید __</option>
                                {categories.map((c, i) => (
                                    <option value={c.cat} key={i}>{c.cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="brand" className="">مدل</label>
                            <select value={brand} onChange={e => brandHandler(e)} name="مدل" id="brand" className="text-black w-2/3 py-2 px-4 rounded" >
                                {category ?
                                    <option value="">__ انتخاب کنید __</option> :
                                    <option value="">دسته‌بندی را انتخاب کنید</option>}
                                {category &&
                                    categories.filter(c => (
                                        c.cat === category
                                    ))[0].brand
                                        .map((c, i) => (
                                            <option value={c} key={i + 100}>{c}</option>
                                        ))
                                }
                            </select>
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="size" className="">سایز</label>
                            {category === "کتاب" ?
                                <select value={size} onChange={e => sizeHandler(e)} name="سایز" id="size" className="text-black w-2/3 py-2 px-4 rounded">
                                    <option value="">__ انتخاب کنید __</option>
                                    <option value="رحلی">رحلی‌بزرگ</option>
                                    <option value="رحلی">رحلی</option>
                                    <option value="نیم‌رحلی">نیم‌رحلی</option>
                                    <option value="وزیری">وزیری</option>
                                    <option value="وزیری">پالتویی</option>
                                    <option value="وزیری">جیبی</option>
                                </select> :
                                <input value={size} onChange={e => sizeHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="size" />
                            }
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="status" className="">وضعیت</label>
                            <select value={status} onChange={e => statusHandler(e)} name="وضعیت" id="status" className="text-black w-2/3 py-2 px-4 rounded">
                                <option value="">__ انتخاب کنید __</option>
                                <option value="نو">نو</option>
                                <option value="درحد‌نو">درحد‌نو</option>
                                <option value="دسته‌دوم">دسته‌دوم</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="author" className="">نویسنده</label>
                            <input value={author} onChange={e => authorHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="author" />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="publisher" className="">انتشارات</label>
                            <input value={publisher} onChange={e => publisherHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="publisher" />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="publishDate" className="">نوبت چاپ</label>
                            <input value={publishDate} onChange={e => publishDateHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="publishDate" />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="weight" className="">وزن محصول</label>
                            <input value={weight} onChange={e => weightHandler(e)} type="number" className=" rounded text-black py-2 px-4 w-2/3" id="weight" />
                        </div>
                    </>
                    :
                    <>
                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="author" className="">نویسنده</label>
                            <input value={author} onChange={e => authorHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="author" />
                        </div>

                        <div className="flex items-center justify-between gap-4 w-80">
                            <label htmlFor="articleBody" className="">
                                متن مقاله
                            </label>
                            <textarea value={articleBody} onChange={e => articleBodyHandler(e)} type="text" className=" rounded text-black py-2 px-4 w-2/3" id="articleBody" required />
                        </div>
                    </>
                }

                <div className="flex items-center justify-between gap-4 w-80">
                    <label htmlFor="img" className="">تصاویر</label>
                    <input value={img} onChange={e => imgHandler(e)} type="file" multiple className=" rounded text-black py-2 px-4 w-2/3" id="img" />
                </div>

                <button className={`py-2.5 md:mt-6 mt-10 w-full rounded-full col-start-1 col-end-3 bg-sky-400 border-sky-300 hover:bg-sky-500 active:border-sky-100 text-white border-b-4 border-solid active:translate-y-1 transition-all duration-75 dark:active:border-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-900`}
                    type='submit'
                >
                    {article ? 'ثبت مقاله' : "ثبت محصول"}
                </button>
            </form>
        </>
    );
}

export default CMSForm;