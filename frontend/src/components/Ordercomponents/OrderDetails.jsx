import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {

    const { id } = useParams()
    console.log(id);
    

    const allOrders = [
        {
            orderId : "ORD-ywwi7799",
            status: "completed",
            orderDate: new Date().toLocaleDateString(),
            noOfProducts : 6,
            orderPrice : 390.99,
        },
        {
            orderId : "ORD-687uhshiu",
            status: "pending",
            orderDate: new Date().toLocaleDateString(),
            noOfProducts : 6,
            orderPrice : 390.99,
        },
        {
            orderId : "ORD-458ihksla",
            status: "completed",
            orderDate: new Date().toLocaleDateString(),
            noOfProducts : 6,
            orderPrice : 390.99,
        },
    ];

    const displayedOrder = allOrders.filter((order) => order.orderId === id)
    console.log(displayedOrder);
    console.log(displayedOrder[0].noOfProducts);
    

    return (

        <>
        <>
                <Outlet />
            </>
            {id}'s ORDER DETAILS
            <ul>
                <li>Number Of Products: {displayedOrder[0].noOfProducts}</li>
                <li>Order Date: {displayedOrder[0].orderDate}</li>
                <li>Order Id: {displayedOrder[0].orderId}</li>
                <li>Status: {displayedOrder[0].status}</li>
            </ul>
        </>

    )

}

export default OrderDetails