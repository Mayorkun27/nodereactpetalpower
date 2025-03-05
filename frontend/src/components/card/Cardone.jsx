import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CardOne = ({ image, type }) => {

    const cardBg = {
        background: `linear-gradient(135deg, #0a0a0ab4, #0a0a0ab2), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    return (

        <div className="CardOne rounded-xl h-[300px] text-pryClr my-3 p-5 overflow-hidden cursor-pointer flex flex-col justify-between gap-10 grayscale hover:grayscale-0 hover:brightness-150" style={cardBg}>
            <div className="space-y-5">
                <div className="flex gap-5 items-center justify-between">
                    <h2 className="font-extrabold text-xl">{type}</h2>
                    <div className="bg-tetClr backdrop-blur-sm rounded-full p-1">
                        <IoIosArrowRoundForward className="size-10 text-secClr" />
                    </div>
                </div>
                <p className="line-clamp-3">
                    There are many houseplants option for your home that are non-toxic. These plants will add life to your home while keeping your kids and pets safe.
                </p>
            </div>
            <div className="grid gap-2">
                <hr />
                <div className="flex gap-6 items-center border border-pryClr bg-pryClr/10 backdrop-blur-md w-max py-1 px-3 rounded-full">
                    <h3 className="text-xl logo relative">
                        <span className="text-2xl">p</span>
                        <span className="absolute -top-1 left-2">p</span>
                    </h3>
                    <h3 className="text-pryClr/50 text-sm">{type}</h3>
                </div>
            </div>
        </div>

    )

}

export default CardOne