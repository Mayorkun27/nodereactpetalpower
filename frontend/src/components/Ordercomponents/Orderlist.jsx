import React, { useState } from "react";
import CardEight from "../card/CardEight";
import { Outlet } from "react-router-dom";

const Orderlist = ({ category }) => {

    // const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const allProducts = [
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

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //       setIsLoading(true)
    //       try {
    //         const response = await axios.get("http://localhost/PhP_Journey/PetalPower/Allproducts.php")
    //         console.log("loading")
    //         console.log(response)
    //         setAllProducts(response.data.data)

    //         allProducts.forEach(element => {
    //             console.log(element.id);
    //         });
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    
    //     fetchProducts()
    //   }, [])
    
    const products = allProducts.filter((product) => product.status.toLowerCase() === category);

    return (

        <div className="relative p-5">
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5">
                {
                    products.map(({ orderId, status, orderDate, noOfProducts, orderPrice}) => (
                        <CardEight 
                            key={orderId} 
                            status={status} 
                            orderId={orderId} 
                            orderDate={orderDate} 
                            noOfProducts={noOfProducts} 
                            orderPrice={orderPrice} 
                            action={() => null}
                        />
                    ))
                }
            </div>
            
        </div>
        
    )

}

export default Orderlist