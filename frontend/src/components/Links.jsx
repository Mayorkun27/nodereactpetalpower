import React from "react";
import img2 from "../assets/images/img2.jpg"
import { NavLink } from "react-router-dom";

const LinkTags = ({ href, title, optStyle }) => {

    return (

        <NavLink 
            to={href} 
            className={({ isActive }) =>
                isActive ? 
                `nav-link text-center active ${optStyle}`
                :
                "nav-link list-none z-[5] px-5 py-2 rounded-full text-center transition-all cursor-pointer "
            }
        >
            {title}
        </NavLink>

    )

}

export default LinkTags