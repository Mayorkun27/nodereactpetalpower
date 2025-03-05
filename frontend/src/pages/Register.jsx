import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BgCarousel from "../components/carousel/BgCarousel";
import toast from "react-hot-toast";

const Register = () => {

    const [visibility1, setVisibility1] = useState(false)
    const [visibility2, setVisibility2] = useState(false)

    const [subscriptionCheck, setSubscriptionCheck] = useState(false)
    const navigate = useNavigate()

    const handleCheck = (e) => {
        setSubscriptionCheck(e.target.checked)
        formik.setFieldValue("subscribe", e.target.checked)
    }

    const formik = useFormik({
        initialValues : {
            fName: "",
            lName: "",
            email: "",
            phoneNumber: "",
            address: "",
            password: "",
            confPassword: "",
            subscribe: false,
        },
        validationSchema: Yup.object().shape({
            fName: Yup.string().required("First name is required"),
            lName: Yup.string().required("Last name is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
            confPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords must match")
                .required("Please rewrite the password"),
            }),
        onSubmit : async ( values, { setSubmitting, resetForm } ) => {
            console.log(values);
            setSubmitting(true)
            try {
                const response = await axios.post("http://localhost:5000/api/v1/user/register", values, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                console.log(response);
                if (response.data.status === 200) {
                    toast.success(response.data.message)
                    toast.success("Redirecting to login...")
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000)
                } else {
                    console.error("Error", response.data.message);
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error(error.message)
            } finally {
                setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                }, 2000)
            }
        }
    })

    return (

        <div className="relative h-[100vh] overflow-hidden">
            <BgCarousel />
            <div className="overlay z-[-1] absolute w-full h-full inset-0"></div>
            <div className="h-full w-full py-10 px-3 flex justify-center overflow-y-scroll">
                <div className="shadow-[0_-5px_10px_5px] shadow-black/5 rounded-lg bg-tetClr p-5 w-full h-max max-w-xl">
                    <div className="flex items-center mx-auto justify-center w-[70px] h-[70px] rounded-full">
                        <NavLink to={"/"}>
                            <h3 className="text-4xl -translate-x-2 translate-y-1 logo logo2 relative">
                                <span className="text-5xl">p</span>
                                <span className="absolute -top-3 left-5">p</span>
                            </h3>
                        </NavLink>
                    </div>
                    <h3 className="text-xl text-center font-semibold md:w-full w-3/4 mx-auto">Welcome to a greener, happier life!</h3>
                    <form className="space-y-5 mt-10" onSubmit={formik.handleSubmit}>
                        <div className="flex md:flex-row flex-col items-center gap-5 w-full">
                            <div className="md:w-1/2 w-full">
                                <label className="block text-sm font-medium mb-2" htmlFor="fName">First Name</label>
                                <input 
                                    type="text" 
                                    name="fName" 
                                    id="fName" 
                                    onChange={formik.handleChange}
                                    className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                                />
                                {formik.errors.fName ? (
                                    <div className="text-red-500 text-sm">{formik.errors.fName}</div>
                                ) : null}
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label className="block text-sm font-medium mb-2" htmlFor="lName">Last Name</label>
                                <input 
                                    type="text" 
                                    name="lName" 
                                    id="lName" 
                                    onChange={formik.handleChange}
                                    className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                                />
                                {formik.errors.lName ? (
                                    <div className="text-red-500 text-sm">{formik.errors.lName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                onChange={formik.handleChange}
                                className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                            />
                            {formik.errors.email ? (
                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">Phone Number (optional)</label>
                            <input 
                                type="tel" 
                                name="phoneNumber" 
                                id="phoneNumber" 
                                onChange={formik.handleChange}
                                className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                            />
                            {formik.errors.phoneNumber ? (
                                <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
                            ) : null}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="address">Address (optional)</label>
                            <input 
                                type="text" 
                                name="address" 
                                id="address" 
                                onChange={formik.handleChange}
                                className="w-full focus:ring-0 bg-pryClr/30 rounded-sm focus:border-black" 
                            />
                            {formik.errors.address ? (
                                <div className="text-red-500 text-sm">{formik.errors.address}</div>
                            ) : null}
                        </div>
                        <div className="flex md:flex-row flex-col items-center gap-5 w-full">
                            <div className="md:w-1/2 w-full">
                                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                                <div className="flex pe-2 items-center gap-3 border border-secClr/70 bg-pryClr/30 rounded-sm">
                                    <input 
                                        type={visibility1 ? "text" : "password"} 
                                        name="password" 
                                        id="password" 
                                        onChange={formik.handleChange}

                                        className="w-full focus:ring-0 focus:border-black bg-transparent border-0" 
                                    />
                                    <i onClick={() => setVisibility1(!visibility1)}>
                                        {
                                            visibility1 
                                                ?
                                            <FaEye className="size-4 text-seClr" />
                                                :
                                            <FaEyeSlash className="size-4 text-seClr" />
                                        }
                                    </i>
                                </div>
                                {formik.errors.password ? (
                                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label className="block text-sm font-medium mb-2" htmlFor="confPassword">Confirm Password</label>
                                <div className="flex pe-2 items-center gap-3 border border-secClr/70 bg-pryClr/30 rounded-sm">
                                    <input 
                                        type={visibility2 ? "text" : "password"} 
                                        name="confPassword" 
                                        id="confPassword" 
                                        onChange={formik.handleChange}
                                        className="w-full focus:ring-0 focus:border-black bg-transparent border-0" 
                                    />
                                    <i onClick={() => setVisibility2(!visibility2)}>
                                        {
                                            visibility2 
                                                ?
                                            <FaEye className="size-4 text-seClr" />
                                                :
                                            <FaEyeSlash className="size-4 text-seClr" />
                                        }
                                    </i>
                                </div>
                                {formik.errors.confPassword ? (
                                    <div className="text-red-500 text-sm">{formik.errors.confPassword}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="grid gap-3 items-center">
                            <div className="inline-flex items-center">
                                <input 
                                    type="checkbox" 
                                    name="subscribe" 
                                    id="subscribe" 
                                    className="focus:ring-0"
                                    onChange={(e) => handleCheck(e)}
                                    checked={subscriptionCheck}
                                />
                                <label className="ml-3 text-sm font-medium" htmlFor="subscribe">I would love to opt-in for plant tips, updates and promotions.</label>
                            </div>
                            <div className="inline-flex items-center">
                                <input 
                                    type="checkbox" 
                                    required 
                                    name="termsAndCondition" 
                                    id="termsAndCondition" 
                                    className="focus:ring-0" 
                                />
                                <label className="ml-3 text-sm font-medium" htmlFor="termsAndCondition">I agree to the terms and conditions.</label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button 
                                type="submit"
                                className="w-1/2 mx-auto bg-compClr text-tetClr rounded-md px-2 py-3"
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? "Registering..." : "Register"}
                            </button>
                        </div>
                    </form>
                    <div className="flex gap-5 mt-5 items-center">
                        <hr className='border w-full mt-1 border-secClr/30 rounded-full '/>
                        <span>or</span>
                        <hr className='border w-full mt-1 border-secClr/30 rounded-full '/>
                    </div>
                    <NavLink to={"/login"} className={"text-center block"}>
                    Already a customer? Login Here.
                    </NavLink>
                </div>
            </div>
        </div>

    )

}

export default Register