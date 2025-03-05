import React from "react";
import { FaPlay } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ButtonTwo = ({ title, optStyle, action }) => {

    return (

        <button type="button" className={`${optStyle} list-none z-[5] px-5 py-2 rounded-full text-center transition-all cursor-pointer flex items-center justify-center`} onClick={action}>
            {title}
        </button>

    )

}

export default ButtonTwo