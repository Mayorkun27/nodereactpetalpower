import React, { useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";

const CardSeven = ({ cName, cTel, cAddress, pName, pDescription, pPrice, pQuantity, action1, action2 }) => {

    return (

        <div className="CardSeven bg-tetClr rounded-xl text-secClr my-3 py-4 px-3 overflow-hidden cursor-pointer flex flex-col items-start justify-between gap-3">
            <div className="font-semibold text-sm flex flex-wrap justify-between gap-3 w-full h-full">
                <div className="p-4 w-[49%] relative space-y-2 border border-secClr">
                    <legend className=" bg-tetClr w-max p-2 -mt-8">Client's details</legend>
                    <p>Client's Name: {cName}</p>
                    <p>Client's Tel: {cTel}</p>
                    <p>Client's Address: {cAddress}</p>
                </div>
                <div className="p-4 space-y-2 w-[49%] relative border border-secClr">
                    <legend className="bg-tetClr w-max p-2 -mt-8">Product details</legend>
                    <p>Product's Name: {pName}</p>
                    <p>Product's Description: {pDescription}</p>
                    <p>Product's Price: ${pPrice}</p>
                    <p>Quantity remaining: {pQuantity}</p>
                </div>
                <div className="flex w-full justify-center gap-10 mt-3">
                    <div
                        className="inline-flex gap-3 items-center border-2 border-secClr hover:bg-secClr hover:text-tetClr text-secClr transition-all rounded-full p-4"
                        onClick={action1}
                    >
                        <span><MdCancel className="size-6" /></span>
                        <span className="whitespace-nowrap">
                            Cancel Order
                        </span>
                    </div>
                    <div
                        className="inline-flex gap-3 items-center border-2 border-secClr hover:bg-secClr hover:text-tetClr text-secClr transition-all rounded-full p-4"
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