import React from "react";

const SocialsBtn = ({ text, icon, optStyle }) => {

    return (

        <button className={`px-4 py-2 rounded-full transition-all duration-300 ${optStyle}`}>
            {icon} {text}
        </button>

    )

}

export default SocialsBtn