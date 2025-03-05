import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CardFour = ({ question, answer, price }) => {

    const [isOpen, setIsOpened] = useState(false)

    return (

        <div className={`CardFour space-y-5 rounded-xl text-secClr border border-secClr my-3 p-4 overflow-hidden cursor-pointer transition-all duration-[5000] ${isOpen ? "h-max" : "h-20"}`} onClick={() => setIsOpened(!isOpen)}>
            <div className="flex justify-between items-center">
                <h3 className="font-bold md:text-2xl text-xl">{question}</h3>
                <div className={`border border-secClr text-secClr transition-all duration-300 rounded-full p-2 ${isOpen ? "-rotate-45" : "rotate-45"}`}>
                    <IoIosArrowRoundForward className="size-8" />
                </div>
            </div>
            <p className="font-semibold">{answer}</p>
        </div>

    )

}

export default CardFour