import React, { useState } from "react";
import axios from "axios";
import img1 from "../../assets/images/img1.jpg"
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import CardSeven from "../../components/card/CardSeven";


const PendingOrders = () => {

  return (

    <div className="grid grid-cols-1 gap-x-7 justify-center items-center min-h-max py-5">
        <CardSeven 
            cName={"Adeleke Favour"}
            cTel={"+2347081696490"}
            cAddress={"Adebimpe Hostel, Stadium, Ogbomosho, Oyo State"}
            pName={"Jute Leaves"}
            pDescription={"Medium, green, healthy Medium, green, healthy Medium, green, healthy healthy Medium, green, healthyhealthy Medium, green, healthy"}
            pPrice={"40.78"}
            pQuantity={"3"}
        />
        <CardSeven 
            cName={"Adeleke Favour"}
            cTel={"+2347081696490"}
            cAddress={"Adebimpe Hostel, Stadium, Ogbomosho, Oyo State"}
            pName={"Jute Leaves"}
            pDescription={"Medium, green, healthy Medium, green, healthy Medium, green, healthy healthy Medium, green, healthyhealthy Medium, green, healthy"}
            pPrice={"40.78"}
            pQuantity={"3"}
        />
    </div>

  );
};

export default PendingOrders;
