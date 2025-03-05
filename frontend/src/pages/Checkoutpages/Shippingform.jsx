import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const ShoppingForm = ({ onSubmit, derivedDetails }) => {

    const [userdetails, setUserDetails] = useState({});

    useEffect(() => {
        const getUsersDetails = localStorage.getItem("user");
        setUserDetails(JSON.parse(getUsersDetails));
    }, [])

    const formik = useFormik({
        initialValues: {
            fName: userdetails.fName,
            lName: userdetails.lName,
            email: userdetails.email,
            phoneNumber: userdetails.phoneNumber,
            address: userdetails.address,
        },
        validationSchema: Yup.object({
            fName: Yup.string().required("First Name is Required"),
            lName: Yup.string().required("Last Name is Required"),
            email: Yup.string().email("Invalid Email format").required("Email is Required"),
            phoneNumber: Yup.number().required("Phone Number is Required"),
            address: Yup.string().required("Address is Required"),
        }),
        onSubmit: async (values, { setSubmitting}) => {
            console.log("userdetails.fName", userdetails.fName);
            console.log("values", values);
            setSubmitting(true)
        }
    })

    return (

        <form className='mt-10 flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="fName">First Name</label>
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    className="w-full bg-pryClr/30 focus:ring-0 focus:border-secClr/30 rounded-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fName}
                />
                {
                    formik.errors.fName 
                    ? 
                    (<p className="text-red-600 text-sm">{formik.errors.fName}</p>)
                    :
                    null
                }
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="lName">Last Name</label>
                <input
                    type="text"
                    name="lName"
                    id="lName"
                    className="w-full bg-pryClr/30 focus:ring-0 focus:border-secClr/30 rounded-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lName}
                />
                {
                    formik.errors.lName 
                    ? 
                    (<p className="text-red-600 text-sm">{formik.errors.lName}</p>)
                    :
                    null
                }
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full bg-pryClr/30 focus:ring-0 focus:border-secClr/30 rounded-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {
                    formik.errors.email 
                    ? 
                    (<p className="text-red-600 text-sm">{formik.errors.email}</p>)
                    :
                    null
                }
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="w-full bg-pryClr/30 focus:ring-0 focus:border-secClr/30 rounded-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                />
                {
                    formik.errors.phoneNumber 
                    ? 
                    (<p className="text-red-600 text-sm">{formik.errors.phoneNumber}</p>)
                    :
                    null
                }
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    className="w-full bg-pryClr/30 focus:ring-0 focus:border-secClr/30 rounded-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />
                {
                    formik.errors.address 
                    ? 
                    (<p className="text-red-600 text-sm">{formik.errors.address}</p>)
                    :
                    null
                }
            </div>
            <button 
                type='submit'
                className='bg-secClr text-pryClr w-full h-[45px] rounded-xl mt-5'
            >
                {
                    formik.isSubmitting ? "Continuing to Summary" : "Continue to Summary"
                }
            </button>
        </form>
        
    );
};

export default ShoppingForm;
