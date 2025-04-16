import React, { useEffect, useState } from "react";
import img3 from "../assets/images/img3.jpeg"
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import LinkTags from "./Links";
import ButtonTwo from "./Button/Buttontwo";
import { useCart } from "../hooks/CartContext";
import CardFive from "./card/Cardfive";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser, useUserUpdate } from "../hooks/UserContext";
import toast from "react-hot-toast";

const Navbar = () => {

    const searchParams = new URLSearchParams(useLocation().search);
    const isAuthenticated = searchParams.get("authenticated") === "true";
    localStorage.setItem("isAuth", JSON.stringify(isAuthenticated));

    
    const [openCart, setOpenCart] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const {cartProducts, incrementQuantity, decrementQuantity} = useCart();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    
    const sessionData = useUser();
    const setSessionData = useUserUpdate(); // ✅ Get update function
    useEffect(() => {
        const checkIfAuthenticated = JSON.parse(localStorage.getItem("isAuth"));
        console.log("checkIfAuthenticated", checkIfAuthenticated);
        console.log(sessionData);
        setIsLoggedIn(checkIfAuthenticated && sessionData ? true : false);
    }, [sessionData]);    

    // ✅ Remove "?authenticated=true" from URL
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate(window.location.pathname, { replace: true }); // ✅ Removes query params
    //     }
    // }, [isAuthenticated]);

    useEffect(() => {
        let total = 0;
        cartProducts.map(({price}) => {
            total += Number(price)
            setTotalPrice(total)
        })
    }, [cartProducts])

    const handleLogOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        setSessionData(null); // ✅ Reset session data
        window.location.reload();
    };

    const handleCheckout = () => {
        toast.error("You need to be logged in to initiate a checkout")
    };

    const cardBg = {
        background : `${`linear-gradient(135deg, #074626d1, #0a0a0ae0), url(${img3})`}`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }

    return (

        <>
            {/* Mobile Navbar */}
            <div className={`nav-pop md:hidden ${openNav ? "flex" : "hidden"} flex flex-col p-5 h-[100dvh] w-full z-30 left-0 top-0 fixed`} style={cardBg}>
                <div className="flex items-center justify-between">
                    <h3 className="text-5xl logo relative p-2 text-transparent">
                        <span className="text-7xl">p</span>
                        <span className="absolute top-0 left-9">p</span>
                    </h3>
                    <i onClick={() => setOpenNav(false)}>
                        <FaX className="size-6 text-tetClr" />
                    </i>
                </div>
                <div className="text-3xl text-tetClr md:hidden flex flex-col items-center gap-5">
                    <ul className="flex flex-col mt-5 items-center gap-5">
                        <LinkTags href={"/"} title={"Home"} optStyle={"nav-link active border border-pryClr"} />
                        <LinkTags href={"/shop"} title={"Shop"} optStyle={"nav-link border border-pryClr"} />
                        <LinkTags href={"/blog"} title={"Blog"} optStyle={"nav-link border border-pryClr"} />
                        <LinkTags href={"/contact"} title={"Contact"} optStyle={"nav-link border border-pryClr"} />
                        {
                            isLoggedIn ? (
                                <details className="border rounded-full bg-transparent w-[300px] text-center py-5 cursor-pointer hover:scale text-pryClr shadow-xl shadow-secClr px-4 list-none relative">
                                    <summary className="list-none font-semibold capitalize">{sessionData.fName}</summary>
                                    <ul className="absolute top-24 left-1/2 -translate-x-1/2 right-0 w-[300px] border-2 z-[100] shadow-xl shadow-secClr bg-pryClr text-secClr rounded-xl flex flex-col gap-2 whitespace-nowrap text-xl">
                                        <LinkTags href={"/myorders"} title={"Active Orders"} />
                                        <LinkTags href={"/shop/checkout"} title={"Checkout"} />
                                        <button onClick={() => handleLogOut()} title={"Logout"} className={"pb-2 nav-link text-red-600"}>Logout</button>
                                    </ul>
                                </details>
                            )
                            : (
                                <LinkTags href={"/login"} title={"Log in"} optStyle={"nav-link border border-pryClr"} />
                            )
                        }
                    </ul>
                </div>
            </div>

            {/* Navbar */}
            <nav className="px-5 py-2 backdrop-blur-sm border border-tetClr text-tetClr rounded-full flex justify-between items-center">
                <i className="md:hidden block relative cursor-pointer" onClick={() => setOpenCart(true)}>
                    <IoBagHandleOutline className="size-7" />
                    <span className="w-5 h-5 bg-pryClr text-secClr absolute -top-2 -right-2 border-2 border-compClr text-xs font-bold rounded-full flex justify-center items-center">{cartProducts.length}</span>
                </i>
                <div className="flex gap-5">
                    <h3 className="text-3xl logo relative p-2">
                        <span className="text-4xl">p</span>
                        <span className="absolute top-0 left-6">p</span>
                    </h3>
                    <ul className="md:flex hidden items-center justify-between gap-3">
                        <LinkTags href={"/"} title={"Home"} optStyle={"nav-link active border border-pryClr"} />
                        <LinkTags href={"/shop"} title={"Shop"} optStyle={"nav-link border border-pryClr"} />
                        <LinkTags href={"/blog"} title={"Blog"} optStyle={"nav-link border border-pryClr"} />
                    </ul>
                </div>
                <div>
                    <ul className="md:flex hidden items-center justify-between gap-3 relative">
                        <li className="relative cursor-pointer" onClick={() => setOpenCart(true)}>
                            <IoBagHandleOutline className="size-5" />
                            <span className="w-5 h-5 bg-pryClr text-secClr absolute -top-2 -right-2 border-2 border-compClr text-xs font-bold rounded-full flex justify-center items-center">{cartProducts.length}</span>
                        </li>
                        <LinkTags href={"/contact"} title={"Contact"} optStyle={"nav-link border border-pryClr"} />
                        {
                            isLoggedIn ? (
                                <details className="border rounded-full bg-pryClr cursor-pointer hover:scale text-secClr shadow-xl shadow-secClr px-4 py-2 list-none">
                                    <summary className="list-none font-semibold capitalize">{sessionData.fName}</summary>
                                    <ul className="absolute top-14 right-0 w-max border z-[100] bg-pryClr shadow-xl shadow-secClr rounded-lg flex flex-col whitespace-nowrap">
                                        <LinkTags href={"/myorders"} title={"Active Orders"} optStyle={"border-b border-secClr"} />
                                        <LinkTags href={"/shop/checkout"} title={"Checkout"} optStyle={"border border-pryClr"} />
                                        <button onClick={() => handleLogOut()} title={"Logout"} className={"pb-2 nav-link"}>Logout</button>
                                    </ul>
                                </details>
                            )
                            : (
                                <LinkTags href={"/login"} title={"Log in"} optStyle={"nav-link border border-pryClr"} />
                            )
                        }
                    </ul>
                </div>
                <i className="md:hidden block" onClick={() => setOpenNav(true)}>
                    <FaBarsStaggered className="" />
                </i>
            </nav>

            {/* Cart */}
            <div className={`cart bg-pryClr text-secClr pt-5 pb-6 px-5 lg:w-1/3 md:w-3/5 w-full shadow-xl shadow-secClr fixed right-0 top-0 z-50 h-[100dvh] transition-opacity duration-[5s] ${openCart ? "flex flex-col gap-5 opacity-100" : "hidden opacity-30"}`}>
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl text-center">Your Cart</h2>
                    <strong>Items in cart : <span>{cartProducts.length}</span></strong>
                </div>
                <div className="overflow-y-scroll text-pryClr h-full filter-bar cart-bar pe-2 space-y-5">
                    {
                        cartProducts.length > 0 ? (
                            cartProducts.map(({prodId, image, name, price, quantity}, index) => (
                                <CardFive
                                    key={index}
                                    image={`http://localhost:5000${image}`}
                                    name={name}
                                    price={price}
                                    quantity={quantity}  
                                    action1={() => incrementQuantity(prodId)}
                                    action2={() => decrementQuantity(prodId)}  
                                />
                            ))
                        ) : (
                            <p className="text-secClr">Your cart is empty.</p>
                        )
                    }
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex justify-between">
                        <span>Total Price:</span>
                        <span className="font-bold text-right">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex w-full md:gap-10 gap-2">
                        <ButtonTwo title={"Close Cart"} optStyle={"w-full border-2 border-compClr text-secClr"} action={() => setOpenCart(false)} />
                        {
                            isLoggedIn 
                            ? 
                            <Link 
                                to={"/shop/checkout"} 
                                className={`w-full ${cartProducts.length <= 0 ? "pointer-events-none opacity-20" : null}`} 
                                children={
                                    <ButtonTwo 
                                        title={"Finish Purchase"} 
                                        optStyle={"whitespace-nowrap py-3 bg-compClr text-tetClr font-semibold"} 
                                    />
                                } 
                            />
                            : 
                            <ButtonTwo 
                                title={"Finish Purchase"} 
                                optStyle={"whitespace-nowrap py-3 bg-compClr text-tetClr font-semibold"} 
                                action={() => handleCheckout()}
                            />
                        }
                        
                    </div>
                </div>
            </div>
        </>

    )

}

export default Navbar