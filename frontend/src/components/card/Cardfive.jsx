import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CardFive = ({ image, name, price, quantity, action1, action2 }) => {

    return (

        <div className="CardFive relative h-[120px] border-2 border-secClr w-full overflow-hidden rounded-lg shadow-xl">
            <img src={image} alt="..." className="w-full h-full object-cover" />
            <div className="bg-secClr/60 absolute inset-0 w-full h-full flex flex-row items-center justify-between px-5 py-3 overflow-hidden">
                <h3 className="text-3xl font-bold">{name}</h3>
                <div className="flex flex-col h-full items-end">
                    <b className="bg-pryClr p-3 text-secClr absolute top-1 drop-shadow-md right-0">{`$${price}`}</b>
                    <div className="flex flex-row gap-5 mt-auto -mb-1 items-center">
                        <i className="border-2 border-tetClr p-2 rounded-full cursor-pointer hover:bg-pryClr hover:text-compClr" onClick={action2}>
                            <FaMinus className="size-4" />
                        </i>
                        <span>{quantity}</span>
                        <i className="border-2 border-tetClr p-2 rounded-full cursor-pointer hover:bg-pryClr hover:text-compClr" onClick={action1}>
                            <FaPlus className="size-4" />
                        </i>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CardFive