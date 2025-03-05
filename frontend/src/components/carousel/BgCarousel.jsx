import React from "react";
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img4 from "../../assets/images/img4.jpg"
import img5 from "../../assets/images/img5.jpg"
import img6 from "../../assets/images/img6.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';

const BgCarousel = () => {

    return(

        <div className="absolute z-[-2] -left-[10%] md:-left-[5%] md:-bottom-[25%] -bottom-[45%] grid gap-5 md:grid-cols-3 grid-cols-1 h-[120vh] md:w-4/5 w-full bgSwiper overflow-hidden">
            <Swiper
                loop="true"
                direction="vertical"
                speed={20000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper w-full"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    1024: { slidesPerView: 1, spaceBetween: 10 },
                    1280: { slidesPerView: 1, spaceBetween: 10 },
                }}
            >
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img4} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img5} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img6} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                loop="true"
                direction="vertical"
                speed={20000}
                autoplay={{
                    delay: 200,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper w-full"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    1024: { slidesPerView: 1, spaceBetween: 10 },
                    1280: { slidesPerView: 1, spaceBetween: 10 },
                }}
            >
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img1} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                loop="true"
                direction="vertical"
                speed={20000}
                autoplay={{
                    delay: 400,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper w-full"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    1024: { slidesPerView: 1, spaceBetween: 10 },
                    1280: { slidesPerView: 1, spaceBetween: 10 },
                }}
            >
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img1} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="bgSwiper-slide my-3">
                    <img src={img2} alt="" loading="lazy" />
                </SwiperSlide>
            </Swiper>
        </div>

    )

}

export default BgCarousel