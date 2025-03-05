import React from "react";
import LinkTags from "../Links";
import CardOne from "../card/Cardone";
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpeg"
import ButtonTwo from "../Button/Buttontwo";
import { NavLink } from "react-router-dom";

const Categories = () => {

    return (

        <div className="container px-5 py-5 mt-10 space-y-8 text-secClr grid gap-5 items-center ">
            <div className="flex md:flex-row flex-col gap-5 items-center justify-between">
                <div className="md:flex grid grid-cols-2 md:gap-1 gap-3 md:w-max w-full">
                    <ButtonTwo title={"Outdoor Plant"} optStyle={"active2"} />
                    <ButtonTwo title={"Indoor Plant"} optStyle={"border-2 border-secClr hover:bg-secClr hover:text-tetClr"} />
                    <ButtonTwo title={"Flower Pot"} optStyle={"border-2 border-secClr hover:bg-secClr hover:text-tetClr"} />
                    <ButtonTwo title={"Potted Plant"} optStyle={"border-2 border-secClr hover:bg-secClr hover:text-tetClr"} />
                </div>
                <div className="flex">
                    <NavLink to={"/shop"} title={""} className="px-5 py-2 rounded-full text-center transition-all cursor-pointer border-2 border-secClr hover:bg-secClr hover:text-tetClr">See All</NavLink>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-2">
                <CardOne type={"Pet Friendly Plants"} image={img1} />
                <CardOne type={"Orchids"} image={img2} />
                <CardOne type={"Succulents"} image={img3} />
            </div>
        </div>

    )

}

export default Categories