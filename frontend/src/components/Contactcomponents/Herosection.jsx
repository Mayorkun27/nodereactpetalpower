import React from "react";
import Navbar from "../Navbar";
import img2 from "../../assets/images/img2.jpg"
import { IoIosArrowRoundDown } from "react-icons/io";
import LinkTags from "../Links";

const Herosection = () => {

    return (

        <section className="herosection lg:h-[60vh] md:h-[40vh] h-[50vh] mb-5 relative inverted-radius py-5">
            <div className="container px-lg-5 h-full px-5">
                <Navbar />
                <div className="hero-text h-[70%] text-pryClr flex justify-center items-center">
                    <div className="content relative">
                        <div className="big-text relative leading-tight">
                            <h1 className="md:text-[7rem] text-center text-[5rem] w-max  mx-auto tracking-wider relative leading-tight font-bold whitespace-nowrap">Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Herosection