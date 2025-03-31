import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpeg"
import CardTwo from "../card/Cardtwo";
import ButtonTwo from "../Button/Buttontwo";
import { BsCart4 } from "react-icons/bs";
import { FaFilter } from "react-icons/fa6";
import { useCart } from "../../hooks/CartContext";
import axios from "axios";
import toast from "react-hot-toast";

const ShopProducts = ({ category }) => {

    const [openFilterBar, setOpenFilterBar] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    // const allProducts = [
    //     {
    //         id : "23",
    //         image : img1,
    //         name : "Aloe Vera",
    //         description : "Medium",
    //         price : "40.88",
    //         category: "plant"
    //     },
    //     {
    //         id : "24",
    //         image : img2,
    //         name : "Orchids",
    //         description : "Medium",
    //         price : "40.88",
    //         category: "plant"
    //     },
    //     {
    //         id : "25",
    //         image : img3,
    //         name : "Snake Plant",
    //         description : "Medium",
    //         price : "40.88",
    //         category: "plant"
    //     },
    //     {
    //         id : "26",
    //         image : img1,
    //         name : "Hibiscus Plant",
    //         description : "Small",
    //         price : "19.88",
    //         category: "plant"
    //     },
    //     {
    //         id : "23",
    //         image : img1,
    //         name : "Watering Can",
    //         description : "Medium",
    //         price : "40.88",
    //         category: "accessory"
    //     },
    //     {
    //         id : "24",
    //         image : img2,
    //         name : "Plant Stand",
    //         description : "Medium",
    //         price : "40.88",
    //         category: "accessory"
    //     }
    // ];

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get("http://localhost:5000/api/v1/product/allproducts")
                console.log(response)
                if (response.status === 200) {
                    setAllProducts(response.data.data)
                    setTimeout(() => {
                        toast.success(response.data.message)
                    }, 2000)
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 3000)
            }
        }
    
        fetchProducts()
    }, [])


    if (isLoading) {
        return <div className="w-full h-screen flex items-center justify-center">
            <span className="w-28 h-28 p-3 block border-[10px] border-t-transparent border-compClr rounded-full animate-spin"></span>
        </div>;
    }

    const products = allProducts.filter((product) => product.category.toLowerCase() === category);
    const { addToCart } = useCart();


    const cardBg = {
        background : `${`linear-gradient(135deg, #074626d1, #0a0a0ab2), url(${img3})`}`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }

    return (

        <div className="relative flex">
            <i className={`bg-compClr text-tetClr border-2 border-tetClr w-max h-14 inline-flex lg:hidden items-center justify-center shadow-md shadow-secClr fixed top-2/3 z-20 px-3 cursor-pointer rounded-full transition-all duration-1000 ${openFilterBar ? "translate-x-full" : "translate-x-5"}`} onClick={() => setOpenFilterBar(!openFilterBar)}>
                <FaFilter className="size-5" />
                <span className="mx-2 whitespace-nowrap duration-300 ease-in-out capitalize">
                    { openFilterBar ? "Close filter bar" : "Show filter bar" }
                </span>
            </i>
            <div className={`lg:w-1/4 md:w-1/2 w-full pr-1 lg:block ${openFilterBar ? "block fixed top-0 z-10" : "hidden"}`} style={cardBg}>
                <div className="filter-bar text-sm sticky top-0 text-tetClr z-[4] shadow-xl shadow-secClr p-5 overflow-y-scroll space-y-5 h-[100vh]" style={cardBg}>
                    <div className="flex items-center justify-between">
                        <h3 className="text-3xl -mt-1 font-bold">Filter</h3>
                        <ButtonTwo title={"Apply Filters"} optStyle={"w-max border border-tetClr bg-tetClr text-secClr"}/>
                    </div>
                    {
                    category === "plant" ? (
                        <>
                        <div className="bg-pryClr text-secClr p-3 rounded-lg">
                            <h3 className="text-2xl font-bold">: by size and type</h3>
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>All</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>Indoor Plants</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>Outdoor Plants</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>Small Pot</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>Potted Plants</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                        </div>
                        <div className="bg-pryClr text-secClr p-3 rounded-lg">
                            <h3 className="text-2xl font-bold">: by price</h3>
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>All</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;0 - &#36;50 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;50 - &#36;100 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;100 - &#36;200 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;200 - &#36;500 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                        </div>
                        <div className="bg-pryClr text-secClr p-3 rounded-lg">
                            <h3 className="text-2xl font-bold">: by features</h3>
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>All</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> Air Purification </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> Mosquito Repellant </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> Low watering Needs </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> Low lighting requirement</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                        </div>
                        </>
                    ) : (
                        <>
                        <div className="bg-pryClr text-secClr p-3 rounded-lg">
                            <h3 className="text-2xl font-bold">: by material</h3>
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>All</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>Ceramic</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>Plastic</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                        </div>
                        <div className="bg-pryClr text-secClr p-3 rounded-lg">
                            <h3 className="text-2xl font-bold">: by price</h3>
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span>All</span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;0 - &#36;50 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;50 - &#36;100 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;100 - &#36;200 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                            <span className="font-semibold"> &#36;200 - &#36;500 </span>
                            <input type="checkbox" name="" id="" />
                            </label>
                        </div>
                        <div className="bg-pryClr text-secClr p-3 rounded-lg">
                            <h3 className="text-2xl font-bold">: by size</h3>
                            <label htmlFor="" className="flex items-center justify-between py-3">
                                <span>All</span>
                                <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                                <span className="font-semibold"> Large </span>
                                <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                                <span className="font-semibold"> Medium </span>
                                <input type="checkbox" name="" id="" />
                            </label>
                            <hr className="border-secClr/30" />
                            <label htmlFor="" className="flex items-center justify-between py-3">
                                <span className="font-semibold"> Small </span>
                                <input type="checkbox" name="" id="" />
                            </label>
                        </div>
                        </>
                    )
                    }
                </div>
            </div>

            <div className="lg:w-3/4 w-full px-5 flex justify-center gap-10 pt-5">
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5">
                    {
                        products.map(({ prodId, image, name, description, price}) => (
                            <CardTwo 
                                key={prodId} 
                                type={name} 
                                image={`http://localhost:5000${image}`} 
                                description={description} 
                                price={price} 
                                icon={<BsCart4 className="size-6 text-tetClr" />} 
                                cta={"Add to cart"} 
                                action={() => addToCart({prodId, name, image, price})} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        
    )

}

export default ShopProducts