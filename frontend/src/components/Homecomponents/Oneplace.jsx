import React from "react";
import img2 from "../../assets/images/img2.jpg"
import { FaPlay } from "react-icons/fa6";

const Oneplace = () => {

    return (

        <div className="lg:w-[90%] w-full lg:ms-[10%] lg:ps-0 px-5 py-10 text-secClr grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 items-center">
            <div className="flex md:flex-row flex-col gap-5 items-center justify-between">
                <div className="md:w-3/5 w-full font-semibold">
                    <h4 className="font-bold md:text-3xl text-xl">Plants for the people</h4>
                    <p className="text-secClr/80 text-sm">We want our visitors to be inspired to get their hands dirty</p>
                </div>
                <div className="relative flex items-center md:w-1/3 cursor-pointer w-full">
                    <img src={img2} alt="..." className="rounded-xl grayscale hover:grayscale-0 transition-all" />
                    <i className="bg-secClr p-2 rounded-full border-4 border-pryClr absolute -right-2 text-pryClr">
                        <FaPlay className="size-4 text-pryClr" />
                    </i>
                </div>
            </div>
            <div className="flex flex-col">
                <h4 className="font-bold text-secClr/80 md:text-xl text-xl leading-snug">
                    <span>Each plants is cared</span>
                    <img src={img2} alt="..." className="inline-flex -translate-y-1 object-cover w-[100px] mx-2 h-[35px] rounded-full" />
                    <span>for by our horticultural experts, so they are as happy and as healthy as they can get.</span>
                </h4>
            </div>
        </div>

    )

}

export default Oneplace