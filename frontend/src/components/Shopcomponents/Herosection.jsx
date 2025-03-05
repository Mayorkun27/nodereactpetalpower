import React, { useState } from "react";
import Navbar from "../Navbar";
import img2 from "../../assets/images/img2.jpg"
import { IoIosArrowRoundDown } from "react-icons/io";
import LinkTags from "../Links";
import { NavLink } from "react-router-dom";
import ButtonTwo from "../Button/Buttontwo";

const Herosection = ({ setCategory }) => {

    const [showPlants, setShowPlants] = useState(true)
    const [showAccessories, setShowAccessories] = useState(false)

    function pickPlant() {
        setCategory("plant");
        setShowPlants(true);
        setShowAccessories(false);
    }
    
    function pickAccessory() {
        setCategory("accessory");
        setShowAccessories(true);
        setShowPlants(false);
    }
    

    return (

        <section className="herosection lg:h-[60vh] md:h-[40vh] h-[50vh] relative inverted-radius py-5">
            <div className="container px-lg-5 h-full px-5">
                <Navbar />
                <div className="hero-text h-[70%] text-pryClr flex justify-center items-center">
                    <div className="content relative">
                        <div className="big-text relative leading-tight">
                            <h1 className="md:text-[7rem] text-center text-[5rem] w-max  mx-auto tracking-wider relative leading-tight font-bold whitespace-nowrap">Shop</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between absolute -bottom-2 right-2 overflow-hidden border-2 w-[230px] border-secClr list-none z-[5] p-0 rounded-full text-center transition-all cursor-pointer">
                    <ButtonTwo title={"Plants"} optStyle={`text-secClr w-1/2 rounded-none ${showPlants ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => pickPlant()} />
                    <ButtonTwo title={"Accessories"} optStyle={`text-secClr w-1/2 rounded-none ${showAccessories ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => pickAccessory()} />
                </div>
            </div>
        </section>

    )

}

export default Herosection