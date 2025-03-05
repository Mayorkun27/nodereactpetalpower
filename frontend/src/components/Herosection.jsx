import React from "react";
import Navbar from "./Navbar";
import img2 from "../assets/images/img2.jpg"
import { IoIosArrowRoundDown } from "react-icons/io";
import LinkTags from "./Links";
import { NavLink } from "react-router-dom";
import ButtonTwo from "./Button/Buttontwo";

const Herosection = () => {

    return (

        <section className="herosection mb-5 relative z-[1] bg-white inverted-radius lg:h-[110vh] h-[90vh] py-5">
            <div className="container px-lg-5 h-full px-5">
                <Navbar />
                <div className="hero-text h-[90%] text-pryClr flex justify-center items-center">
                    <div className="content relative -z-[1] h-full">
                        <div className="big-text lg:top-10 top-14 relative leading-tight" data-text1="Petal power" data-text2="We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!">
                            <h1 className="md:text-[12rem] text-center text-[5rem] w-max  mx-auto tracking-wider relative leading-tight font-medium whitespace-nowrap">
                                <span>gro</span>
                                <span>wth</span>
                            </h1>
                        </div>
                        <div className="flex md:flex-row flex-col md:-space-x-1 -space-y-1 mt-auto absolute lg:bottom-4 md:bottom-0 bottom-12">
                            <div className="p-5 backdrop-blur-sm md:w-[45%] w-[75%] rounded-2xl bg-tetClr/15 space-y-3 md:text-base text-sm">
                                <h4 className="font-bold md:text-2xl text-xl">100+ Plants</h4>
                                <p>We want our visitors to be inspired to get their hands dirty</p>
                            </div>
                            <div className="p-3 flex justify-center items-center backdrop-blur-sm rounded-2xl bg-tetClr/15 md:w-max w-[75%]">
                                <div className="avatar-group flex md:flex-col flex-row md:-space-y-4 md:-space-x-0 -space-x-4 md:rtl:space-y-reverse rtl:space-x-reverse">
                                    <div className="avatar border rounded-full shadow-md shadow-secClr overflow-hidden">
                                        <div className="w-12 h-12">
                                            <img src={img2} alt="..." className="w-full object-cover h-full" />
                                        </div>
                                    </div>
                                    <div className="avatar border rounded-full shadow-md shadow-secClr overflow-hidden">
                                        <div className="w-12 h-12">
                                            <img src={img2} alt="..." className="w-full object-cover h-full" />
                                        </div>
                                    </div>
                                    <div className="avatar border rounded-full shadow-md shadow-secClr overflow-hidden">
                                        <div className="w-12 h-12">
                                            <img src={img2} alt="..." className="w-full object-cover h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to={"/shop"}>
                    <ButtonTwo title={"Shop tropical plants"} optStyle={"absolute bottom-0 right-4 border-2 w-[220px] border-secClr"} />
                </NavLink>
                <div className="border border-tetClr backdrop-blur-sm rounded-full p-3 absolute top-[80%] md:right-[10%] right-[5%] hover:rotate-[360deg] cursor-pointer transition-all duration-[1s]">
                    <IoIosArrowRoundDown className="size-10 text-tetClr" />
                </div>
            </div>
        </section>

    )

}

export default Herosection