import ProductBox from "./ProductBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay , Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
function SuggestionBox({ bascket = false }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>
            <h3 className="text-slate-700 text-xl font-bold py-2 pl-4 pr-6 rounded-l-lg -right-2 top-6 dark:bg-slate-800 dark:text-white bg-white absolute transition-all">
                محصولات مشابه
            </h3>

            <div className={`w-[90%] mt-16 mb-4 mx-auto`}>
                <div className="lg:block sm:hidden">
                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: false,
                                translate: [0, 0, -400],
                            },
                            next: {
                                shadow: false,
                                translate: ['100%', 0, 0],
                            },
                        }}
                        autoplay={{
                            delay: 2800,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCreative, Autoplay]}
                        className={`${bascket ? 'lg:w-[15vw]' : 'lg:w-[20vw]'} w-[70vw] rounded-2xl`}
                    >
                        <SwiperSlide>
                            <ProductBox suggest={true} box={false} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox suggest={true} box={false} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox suggest={true} box={false} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox suggest={true} box={false} />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {
                    bascket &&
                    <div className="lg:block hidden mt-10">
                        <Swiper
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                                prev: {
                                    shadow: false,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    shadow: false,
                                    translate: ['100%', 0, 0],
                                },
                            }}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className={`lg:w-[15vw] w-[70vw] rounded-2xl`}
                        >
                            <SwiperSlide>
                                <ProductBox suggest={true} box={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductBox suggest={true} box={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductBox suggest={true} box={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductBox suggest={true} box={false} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                }

                <div className="justify-center flex-wrap gap-4 lg:hidden sm:flex hidden">
                    {/* <div className="sm:w-40 w-52">
                        <ProductBox box={false} suggest={true} />
                    </div>
                    <div className="sm:w-40 w-52">
                        <ProductBox box={false} suggest={true} />
                    </div>
                    <div className="sm:w-40 w-52">
                        <ProductBox box={false} suggest={true} />
                    </div>
                    <div className="sm:w-40 w-52">
                        <ProductBox box={false} suggest={true} />
                    </div> */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={60}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        style={{ padding: '0 0px 20px 0px' }}
                        className="w-[75vw]"
                    >
                        {list.map(i => (
                            <SwiperSlide key={i}>
                                <ProductBox />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default SuggestionBox;