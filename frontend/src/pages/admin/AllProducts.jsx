import React, { useState } from "react";
import axios from "axios";
import CardSix from "../../components/card/CardSix";
import img3 from "../../assets/images/img3.jpeg"
import img2 from "../../assets/images/img2.jpg"
import img1 from "../../assets/images/img1.jpg"
import { FaCartPlus, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const AllProduct = () => {

  return (

    <div className="grid grid-cols-2 gap-x-7 justify-center items-center min-h-max py-5">
        <CardSix 
            image={img1}
            type={"Jute Leaves"}
            description={"Medium, green, healthy Medium, green, healthy Medium, green, healthy healthy Medium, green, healthyhealthy Medium, green, healthy"}
            price={"40.78"}
            quantity={"3"}
            icon1={<FaEdit />}
            cta1={"Edit product details"}
            icon2={<FaTrash />}
            cta2={"Delete product"}
        />
        <CardSix 
            image={img1}
            type={"Jute Leaves"}
            description={"Medium, green, healthy Medium, green, healthy Medium, green, healthy healthy Medium, green, healthyhealthy Medium, green, healthy"}
            price={"40.78"}
            quantity={"3"}
            icon1={<FaEdit />}
            cta1={"Edit product details"}
            icon2={<FaTrash />}
            cta2={"Delete product"}
        />
        <CardSix 
            image={img1}
            type={"Jute Leaves"}
            description={"Medium, green, healthy Medium, green, healthy Medium, green, healthy healthy Medium, green, healthyhealthy Medium, green, healthy"}
            price={"40.78"}
            quantity={"3"}
            icon1={<FaEdit />}
            cta1={"Edit product details"}
            icon2={<FaTrash />}
            cta2={"Delete product"}
        />
    </div>

  );
};

export default AllProduct;
