import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const CardTwo = ({ image, type, description, price, priceVisibility, icon, cta, action }) => {

    const [like, setLike] = useState(false)

    return (

        <div className="CardTwo h-max bg-tetClr rounded-xl text-secClr my-3 p-2 overflow-hidden cursor-pointer flex flex-col justify-between gap-5">
            <div className="space-y-4">
                <div className="h-[200px] relative overflow-hidden rounded-lg">
                    <img src={image} alt={type} className="object-cover w-full h-full scale-100 hover:scale-105 transition-all" />
                    <div className="bg-tetClr/30 backdrop-blur-md absolute top-2 left-2 rounded-full p-4 border border-tetClr" onClick={() => setLike(!like)}>
                        {
                            like 
                                ?
                            <IoIosHeart className="size-6 text-tetClr" />
                                :
                            <CiHeart className="size-6 text-tetClr" />
                        }
                    </div>
                </div>
                <div className="flex relative justify-between items-end">
                    <div className="flex flex-col space-y-2 w-full">
                        <h2 className="font-bold text-xl whitespace-nowrap">{type}</h2>
                        <p className="line-clamp-2">{description}</p>
                        <div className="flex items-center justify-between">
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