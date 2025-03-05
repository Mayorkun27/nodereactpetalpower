import React from "react";
import LinkTags from "../../components/Links";
import ButtonTwo from "../../components/Button/Buttontwo";
import img3 from "../../assets/images/img3.jpeg"
import img2 from "../../assets/images/img2.jpg"
import img1 from "../../assets/images/img1.jpg"

const AdminDashboard = () => {

    const cardBg = {
        background : `${`linear-gradient(135deg, #074626d1, #0a0a0ab2), url(${img2})`}`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }

    return (

        <>
            <div className="grid grid-cols-4 gap-5 pt-10 px-5">
                <div className="col-span-2 p-5 bg-tetClr border-2 border-compClr rounded-xl">
                    <span>Total Revenue</span>
                    <h3 className="text-5xl text-center font-extrabold">$354.90</h3>
                </div>
                <div className="col-span-1 p-5 bg-tetClr border-2 border-compClr rounded-xl">
                    <span>All Users</span>
                    <h3 className="text-7xl text-center font-extrabold">3</h3>
                </div>
                <div className="col-span-1 p-5 bg-tetClr border-2 border-compClr rounded-xl">
                    <span>All Products</span>
                    <h3 className="text-7xl text-center font-extrabold">5</h3>
                </div>
            </div>
        </>

    )

}

export default AdminDashboard