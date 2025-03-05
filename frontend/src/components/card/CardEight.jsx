import React from "react";
import { FaClipboardList } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardEight = ({ status, orderId, orderDate, noOfProducts, orderPrice }) => {

    return (

        <div className={`CardEight relative h-max bg-tetClr shadow-xl rounded-xl text-secClr my-3 p-4 overflow-hidden cursor-pointer border-2 ${status === "completed" ? "border-compClr" : "border-yellow-400"}`}>
            <div className={`absolute -right-0 top-0 uppercase text-pryClr ${status === "completed" ? "bg-compClr shadow-compClr/30" : "bg-yellow-400 shadow-yellow-400/30"} w-[120px] h-[40px] flex justify-center items-center rounded-bl-2x shadow-lg`}>
                <span className="status text-sm font-medium">{status}</span>
            </div>
            <div className="flex relative justify-between items-end">
                <div className="flex flex-col space-y-2 w-full">
                    <h3>Order Id: {orderId}</h3>
                    <h3>Order Date: {orderDate}</h3>
                    <h3 className="capitalize">Order status: {status}</h3>
                    <h3>No. Of Products: {noOfProducts}</h3>
                    <div className="flex items-center gap-3 justify-between">
                        <h3>Order amount: <span className={`font-bold`}>${orderPrice}</span></h3>
                        <Link
                            to={`/myorders/${orderId}`}
                        >
                            <div className="inline-flex items-center bg-secClr text-tetClr rounded-full hover:rounded-full px-2 py-2 hover:ps-4 lg:ps-2 ps-4 lg:w-10 h-10 hover:w-auto w-auto transition-all duration-300 ease-in-out overflow-hidden">
                                <span><FaClipboardList className="size-6 text-tetClr" /></span>
                                <span className="mx-2 whitespace-nowrap duration-300 ease-in-out">View Details</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CardEight