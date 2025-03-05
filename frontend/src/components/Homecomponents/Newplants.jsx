import React from "react";
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpeg"
import CardTwo from "../card/Cardtwo";
import CardThree from "../card/CardThree";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Newplants = () => {

    const navigate = useNavigate()

    return (

        <div className="container px-5 py-5 mt-10 space-y-8 text-secClr grid gap-5 items-center">
            <CardThree 
                title={"New plants"} 
                direction={"flex-wrap"} 
                subHeading={"Bring nature inside and shop our big selections of fresh indoor plants, including instagram-worthy houseplants, pet-friendly plants, orchids and one-of-a-kind rose plants"} 
                titleStyle={"lg:text-[4.5rem] md:text-[3.5rem] text-[3rem] md:w-[43%]"} 
                subStyle={"md:w-[52%] w-full text-end"}
            />
            <Swiper
                loop="true"
                speed={4000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper pb-10 w-full"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 10 },
                    1280: { slidesPerView: 3, spaceBetween: 10 },
                }}
            >
                <SwiperSlide>
                    <CardTwo type={"Pet Friendly Plants"} image={img1} description={"Medium, mature, well-cultured"} price={"30.89"} priceVisibility={"invisible"} icon={<IoIosArrowRoundForward className="size-8 text-tetClr" />} cta={"View Product"} action={() => navigate("/shop")} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardTwo type={"Orchids"} image={img2} description={"Medium, mature, well-cultured"} price={"30.89"} priceVisibility={"invisible"} icon={<IoIosArrowRoundForward className="size-8 text-tetClr" />} cta={"View Product"} action={() => navigate("/shop")}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTwo type={"Succulents"} image={img3} description={"Medium, mature, well-cultured"} price={"30.89"} priceVisibility={"invisible"} icon={<IoIosArrowRoundForward className="size-8 text-tetClr" />} cta={"View Product"} action={() => navigate("/shop")}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTwo type={"Succulents"} image={img3} description={"Medium, mature, well-cultured"} price={"30.89"} priceVisibility={"invisible"} icon={<IoIosArrowRoundForward className="size-8 text-tetClr" />} cta={"View Product"} action={() => navigate("/shop")}/>
                </SwiperSlide>
            </Swiper>
        </div>

    )

}

export default Newplants