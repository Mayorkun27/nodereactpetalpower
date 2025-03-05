import React, { useState } from "react";
import Navbar from "../Navbar";
import ButtonTwo from "../Button/Buttontwo";

const Herosection = ({ setCategory }) => {

    const [showCompletedOrders, setCompletedOrders] = useState(true)
    const [showPendingOrders, setPendingOrders] = useState(false)

    function pickCompleted() {
        setCategory("completed");
        setCompletedOrders(true);
        setPendingOrders(false);
    }
    
    function pickPending() {
        setCategory("pending");
        setPendingOrders(true);
        setCompletedOrders(false);
    }

    return (

        <section className="herosection lg:h-[60vh] md:h-[40vh] h-[40vh] relative inverted-radius py-5">
            <div className="container px-lg-5 h-full px-5">
                <Navbar />
                <div className="hero-text h-[50%] text-pryClr flex justify-center items-center">
                    <div className="content relative">
                        <div className="big-text relative leading-tight">
                            <h1 className="md:text-[7rem] text-center text-[4.3rem] w-max  mx-auto md:tracking-wider tracking-normal relative leading-tight font-bold whitespace-nowrap">My Orders</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between absolute -bottom-1 right-2 overflow-hidden border-2 w-[230px] border-secClr list-none z-[5] p-0 rounded-full text-center transition-all cursor-pointer">
                    <ButtonTwo title={"Completed"} optStyle={`text-secClr w-1/2 rounded-none ${showCompletedOrders ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => pickCompleted()} />
                    <ButtonTwo title={"Pending"} optStyle={`text-secClr w-1/2 rounded-none ${showPendingOrders ? "shadow-2xl shadow-secClr bg-compClr text-tetClr transition-all" : ""}`} action={() => pickPending()} />
                </div>
            </div>
        </section>

    )

}

export default Herosection