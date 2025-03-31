import React from "react";

const CardSix = ({ image, name, description, price, quantity, icon1, icon2, cta1, cta2, action1, action2 }) => {

    return (

        <div className={`CardSix bg-tetClr rounded-xl text-secClr my-3 p-3 overflow-hidden cursor-pointer flex items-start justify-between gap-3 h-[210px] ${quantity <= 0 ? "border-2 border-red-600 animate_CardSix" : null}`}>
            <div className="h-full w-[30%] relative overflow-hidden rounded-lg">
                <img src={image} alt={name} className="object-cover bg-pryClr w-full h-full scale-100 hover:scale-105 transition-all" />
            </div>
            <div className="font-semibold text-xs flex gap-2 flex-col w-full h-full">
                <h2 className="text-md whitespace-nowrap">Name: {name}</h2>
                <p className="line-clamp-2">Description: {description}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <div className="flex justify-between mt-auto w-full">
                    <div
                        aria-disabled
                        className="inline-flex scale-75 gap-3 items-center bg-secClr text-tetClr rounded-full hover:rounded-full px-2 py-2 ps-[13px] hover:ps-4 w-10 h-10 hover:w-auto transition-all duration-300 ease-in-out overflow-hidden"
                        onClick={action1}
                    >
                        <span className="text-lg -mt-1">{icon1}</span>
                        <span className="whitespace-nowrap">
                            {cta1}
                        </span>
                    </div>
                    <div
                        className="inline-flex scale-75 gap-3 items-center bg-secClr text-tetClr rounded-full hover:rounded-full px-2 py-2 ps-3 hover:ps-4 w-10 h-10 hover:w-auto transition-all duration-300 ease-in-out overflow-hidden"
                        onClick={action2}
                    >
                        <span className="text-lg">{icon2}</span>
                        <span className="whitespace-nowrap">
                            {cta2}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CardSix