import React, { useEffect, useState } from "react";
import img2 from "../../assets/images/img2.jpg"
import axios from "axios";
import toast from "react-hot-toast";

const AdminDashboard = () => {

    const [users, setUsers] = useState([])
    const [allProducts, setProducts] = useState([])
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoadingUsers(true)
            try {
                const response = await axios.get("http://localhost:5000/api/v1/user/allusers")
                console.log(response)
                if (response.status == 200 ) {
                    toast.success("Users stat fetched successfully")
                    setUsers(response.data.data)
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => {
                    setIsLoadingUsers(false)
                }, 3000)
            }
        }
        const fetchProducts = async () => {
            setIsLoadingUsers(true)
            try {
                const response = await axios.get("http://localhost:5000/api/v1/product/allproducts")
                console.log(response)
                if (response.status == 200 ) {
                    toast.success("Products stat fetched successfully")
                    setProducts(response.data.data)
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => {
                    setIsLoadingUsers(false)
                }, 3000)
            }
        }

        fetchProducts()
        fetchUsers()
    }, [])

    const cardBg = {
        background : `${`linear-gradient(135deg, #074626d1, #0a0a0ab2), url(${img2})`}`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }

    return (

        <>
            <div className="grid grid-cols-4 gap-5 pt-10">
                <div className="md:col-span-2 col-span-4 p-5 bg-tetClr border-2 border-compClr rounded-xl">
                    <span>Total Revenue</span>
                    <h3 className="text-5xl text-center font-extrabold">$354.90</h3>
                </div>
                <div className="md:col-span-1 col-span-2 p-5 bg-tetClr border-2 border-compClr rounded-xl">
                    <span>All Users</span>
                    <h3 className="text-7xl text-center font-extrabold">
                        {
                            isLoadingUsers 
                            ? 
                            (
                                <span className="w-8 h-8 p-3 block border-4 border-t-transparent border-compClr rounded-full animate-spin"></span>
                            ) 
                            :
                            users.length
                        }
                    </h3>
                </div>
                <div className="md:col-span-1 col-span-2 p-5 bg-tetClr border-2 border-compClr rounded-xl">
                    <span>All Products</span>
                    <h3 className="text-7xl text-center font-extrabold">
                        {
                            isLoadingUsers 
                            ? 
                            (
                                <span className="w-8 h-8 p-3 block border-4 border-t-transparent border-compClr rounded-full animate-spin"></span>
                            ) 
                            :
                            allProducts.length
                        }
                    </h3>
                </div>
            </div>
        </>

    )

}

export default AdminDashboard