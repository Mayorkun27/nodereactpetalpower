import React from "react";
import img3 from "../../assets/images/img3.jpeg"
import img2 from "../../assets/images/img2.jpg"
import img1 from "../../assets/images/img1.jpg"
import LinkTags from "../../components/Links";
import ButtonTwo from "../../components/Button/Buttontwo";


const AdminPageLayout = ({ pageName, child }) => {

    const cardBg = {
        background : `${`linear-gradient(135deg, #074626d1, #0a0a0ab2), url(${img2})`}`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }

    return (

        <div className="grid grid-cols-4 w-full h-[100vh] relative">

            <div className="fixed top-0 left-0 h-full space-y-5 py-6 px-5 text-tetClr w-1/4 shadow-xl shadow-secClr/60" style={cardBg}>
                <div className="text-center">
                    <h3 className="text-4xl text-tetClr w-max mx-auto logo relative p-2">
                        <span className="text-5xl">p</span>
                        <span className="absolute top-0 left-6">p</span>
                    </h3>
                </div>
                <div className="flex flex-col justify-between h-[85%]">
                    <ul className="grid gap-5 text-xl">
                        <LinkTags href={"/admin/overview"} title={"Overview"} optStyle={"nav-link"} />
                        <LinkTags href={"/admin/allclients"} title={"All Clients"} optStyle={"nav-link"} />
                        <LinkTags href={"/admin/addproduct"} title={"Add Product"} optStyle={"nav-link"} />
                        <LinkTags href={"/admin/allproduct"} title={"All Products"} optStyle={"nav-link"} />
                        <LinkTags href={"/admin/pendingorders"} title={"Pending Orders"} optStyle={"nav-link"} />
                    </ul>
                    <ButtonTwo title={"Logout"} optStyle={"w-full"} />
                </div>
            </div>

            <div className="col-span-4 w-3/4 translate-x-[33%] text-secClr">
                <div className="container flex-col space-y-5 px-5 relative">
                    <div className="backdrop-blur-sm border border-black px-5 py-4 text-secClr rounded-full flex justify-between items-center sticky top-5 z-10">
                        <h2 className="text-2xl font-bold">{pageName}</h2>
                        <h6>Admin</h6>
                    </div>
                    {child}
                </div>
            </div>
        </div>

    )

}

export default AdminPageLayout