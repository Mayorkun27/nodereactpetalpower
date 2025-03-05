import React, { useState } from "react";
import Herosection from "../components/Ordercomponents/Herosection";
import Orderlist from "../components/Ordercomponents/Orderlist";

const MyOrders = () => {

    const [category, setCategory] = useState("completed"); // default to "completed"

    return (

        <>
            <Herosection setCategory={setCategory} />
            <Orderlist category={category} />
        </>

    )

}

export default MyOrders;