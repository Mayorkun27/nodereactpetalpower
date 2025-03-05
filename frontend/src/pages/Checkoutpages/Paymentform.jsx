import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"

const Paymentform = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues: {
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        address: "",
    },
    validationSchema: Yup.object({
        fName: Yup.string().required("First Name is Required"),
        lName: Yup.string().required("Last Name is Required"),
        email: Yup.string().email("Invalid Email format").required("Email is Required"),
        phoneNumber: Yup.number().required("Phone Number is Required"),
        address: Yup.string().required("Address is Required"),
    })
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
        </div>
        <button 
            type='submit'
            className='bg-secClr text-pryClr w-full h-[45px] rounded-xl mt-5'
        >Continue to Payment</button>
    </form>
    
  );
};

export default Paymentform;
