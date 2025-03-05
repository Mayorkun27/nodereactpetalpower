import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardThree from "../card/CardThree";
import { FaPlay } from "react-icons/fa6";

const AboutUs = () => {
    

    return (
        <div className="container px-5 py-5 mt-10 space-y-8 text-secClr">
           <CardThree
                title={"Quality plants & curated goods"} 
                direction={"flex-wrap"} 
                subHeading={"We offer a carefully curated selection of indoor and outdoor plants, hand-crafted home goods that put quality ahead of quantity, and living art made right here in the shops, terrariums, landscapes, arrangements, vessels and holders."} 
                titleStyle={"lg:text-[4.5rem] md:text-[3.5rem] text-[2.7rem] text-center md:leading-[70px] leading-[50px] w-full"} 
                subStyle={"lg:w-[72%] md:w-[82%] sm:text-base text-sm mx-auto text-center"}
            />
            <div className="flex relative mx-auto md:w-3/4 w-full cursor-pointer video-container">
                <div className="w-1/2 rounded-2xl h-[250px] overflow-hidden">
                    <img src={img1} alt="..." className="object-cover object-right-top w-full h-full" />
                </div>
                <i className="bg-secClr/70 hover:scale-110 transition-all p-6 rounded-full border-4 border-pryClr absolute z-[5] top-[125px] -translate-y-[40px] left-1/2 -translate-x-[40px] text-pryClr">
                    <FaPlay className="size-7 text-pryClr" />
                </i>
                <div className="w-1/2 rounded-2xl h-[250px] overflow-hidden">
                    <img src={img1} alt="..." className="object-cover object-left-top w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
