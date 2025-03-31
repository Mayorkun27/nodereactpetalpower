import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useUser } from '../../hooks/UserContext';

const ShoppingForm = ({ onSubmit, derivedDetails }) => {

    const sessionData = useUser()

    const formik = useFormik({
        initialValues: {
            clientId: sessionData._id,
            fName: sessionData.fName,
            lName: sessionData.lName,
            email: sessionData.email,
            phoneNumber: sessionData.phoneNumber ? sessionData.phoneNumber : "",
            address: sessionData.address,
        },
        validationSchema: Yup.object({
            clientId: Yup.string().required("First Name is Required"),
            fName: Yup.string().required("First Name is Required"),
            lName: Yup.string().required("Last Name is Required"),
            email: Yup.string().email("Invalid Email format").required("Email is Required"),
            phoneNumber: Yup.number().required("Phone Number is Required"),
            address: Yup.string().required("Address is Required"),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true)
            console.log("values", values);
            derivedDetails(values)
            console.log("derivedDetails", derivedDetails)
            setTimeout(() => {
                setSubmitting(false)
                onSubmit()
            }, 2000);
        }
    })

    return (

        <form className='mt-10 flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div hidden>
                <label className="block text-sm font-medium mb-2" htmlFor="clientId">Client Id</label>
                <input
                    type="text"
                    name="clientId"
                    id="clientId"
                    readOnly
                    className="w-full bg-pryClr/30 focus:ring-0 capitalize focus:border-secClr/30 rounded-sm opacity-55"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.clientId}
                />
                {
                    formik.errors.clientId 
                    ? 
                    (<p className="text-red-600 text-sm">{formik.errors.clientId}</p>)
                    :
                    null
                }
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="fName">First Name</label>
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    className="w-full bg-pryClr/30 focus:ring-0 capitalize focus:border-secClr/30 rounded-sm"
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
                    className="w-full bg-pryClr/30 focus:ring-0 capitalize focus:border-secClr/30 rounded-sm"
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
                    className="w-full bg-pryClr/30 focus:ring-0 capitalize focus:border-secClr/30 rounded-sm"
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
                    className="w-full bg-pryClr/30 focus:ring-0 capitalize focus:border-secClr/30 rounded-sm"
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
                disabled={formik.isSubmitting}
            >
                {
                    formik.isSubmitting ? "Continuing to Summary..." : "Continue to Summary"
                }
            </button>
        </form>
        
    );
};

export default ShoppingForm;
