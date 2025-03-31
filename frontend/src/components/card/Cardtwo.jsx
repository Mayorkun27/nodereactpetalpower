import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const CardTwo = ({ image, type, description, price, priceVisibility, icon, cta, action }) => {

    const [like, setLike] = useState(false)

    return (

        <div className="CardTwo h-[350px] bg-tetClr rounded-xl text-secClr my-3 p-2 overflow-hidden cursor-pointer flex flex-col justify-between gap-5">
            <div className="space-y-2">
                <div className="h-[200px] relative overflow-hidden rounded-lg border-2 border-pryClr">
                    <img src={image} alt={type} className="object-cover w-full h-full scale-100 hover:scale-105 transition-all" />
                    <div className="bg-compClr/50 backdrop-blur-md absolute top-2 left-2 rounded-full p-4 border border-tetClr" onClick={() => setLike(!like)}>
                        {
                            like 
                                ?
                            <IoIosHeart className="size-6 text-tetClr" />
                                :
                            <CiHeart className="size-6 text-tetClr" />
                        }
                    </div>
                </div>
                <div className="h-[120px] flex relative justify-between">
                    <div className="flex flex-col w-full">
                        <h2 className="font-bold text-xl whitespace-nowrap">{type}</h2>
                        <p className="line-clamp-2 text-sm">{description}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <p className={`font-bold ${priceVisibility}`}>${price}</p>
                            <div
                                className="inline-flex items-center bg-secClr text-tetClr rounded-full hover:rounded-full px-2 py-2 hover:ps-4 w-10 h-10 hover:w-auto transition-all duration-300 ease-in-out overflow-hidden"
                                onClick={action}
                            >
                                <span>{icon}</span>
                                <span className="mx-2 whitespace-nowrap duration-300 ease-in-out">
                                    {cta}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CardTwo