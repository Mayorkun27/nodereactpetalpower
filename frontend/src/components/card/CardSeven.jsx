import React from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";

const CardSeven = ({ ordStatus, cName, cTel, cAddress, pName, pDescription, pPrice, pQuantity, action1, action2 }) => {

    return (

        <div className="CardSeven bg-tetClr drop-shadow-lg border-2 border-pryClr rounded-xl text-secClr my-3 py-4 px-3 overflow-hidden cursor-pointer flex flex-col items-start justify-between gap-3">
            <div className="font-semibold text-xs flex flex-wrap justify-between gap-3 w-full h-full">
                <div className={`absolute -right-0 top-0 z-10 uppercase bg-pryClr text-secClr w-[120px] h-[40px] flex justify-center items-center rounded-bl-2x ${ordStatus === "pending" ? "text-yellow-400" : "text-compClr"}`}>
                    <span className="text-sm font-medium">{ordStatus}</span>
                </div>
                <div className="p-4 w-full md:mb-0 mb-3 relative space-y-2 border border-secClr capitalize">
                    <legend className=" bg-tetClr w-max p-2 -mt-8">Client's details</legend>
                    <p>Client's Name: {cName}</p>
                    <p>Client's Tel: {cTel}</p>
                    <p>Client's Address: {cAddress}</p>
                </div>
                <div className="p-4 space-y-2 w-full md:mt-0 mt-3 relative border border-secClr">
                    <legend className="bg-tetClr w-max p-2 -mt-8">Product details</legend>
                    <p>Product's Name: {pName}</p>
                    <p>Product's Description: {pDescription}</p>
                    <p>Product's Price: ${pPrice}</p>
                    <p>Quantity: {pQuantity}</p>
                </div>
                <div className="flex w-full justify-center lg:gap-5 gap-10 lg:scale-[.70] scale-90 mt-3">
                    <div
                        className={`inline-flex gap-3 items-center border-2 border-secClr hover:bg-secClr hover:text-tetClr text-secClr transition-all rounded-full p-4 ${ordStatus === "completed" ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                        onClick={action1}
                    >
                        <span><MdCancel className="size-6" /></span>
                        <span className="whitespace-nowrap">
                            Cancel Order
                        </span>
                    </div>
                    <div
                        className={`inline-flex gap-3 items-center border-2 border-secClr hover:bg-secClr hover:text-tetClr text-secClr transition-all rounded-full p-4 ${ordStatus === "completed" ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                        onClick={action2}
                        
                    >
                        <span><MdCheckCircle className="size-6" /></span>
                        <span className="whitespace-nowrap">
                            Product Shipped
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CardSeven