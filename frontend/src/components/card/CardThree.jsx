import React from "react";

const CardThree = ({ title, subHeading, direction, titleStyle, subStyle }) => {

    return (

        <div className={`flex ${direction} md:gap-5 gap-0 items-center justify-between`}>
            <h3 className={`w-full capitalize font-extrabold ${titleStyle}`}>{title}</h3>
            <p className={`font-medium ${subStyle}`}>{subHeading}</p>
        </div>

    )

}

export default CardThree