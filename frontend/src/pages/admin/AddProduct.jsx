import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


const Addproduct = () => {

  const formik = useFormik({
    initialValues : {
      category: "",
      name: "",
      description: "",
      quantity: "",
      price: "",
      image: null,
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Category is required!"),
      name: Yup.string().required("Product name is required!"),
      description: Yup.string().required("Description is required!"),
      price: Yup.number().required("Price is required!").positive().min(0),
      quantity: Yup.number().required("Quantity is required!"),
      image: Yup.mixed().required("Image is required!"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const productId = uuidv4(); // Generate a unique ID here
      const formData = new FormData();
      formData.append("id", productId);
      formData.append("category", values.category);
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("image", values.image);
      formData.append("quantity", values.quantity);
    
      // Log FormData contents
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      
      try {
        const response = await axios.post("http://localhost/PhP_Journey/PetalPower/upload.php", formData, {
           headers: { "Content-Type": "multipart/form-data" } 
        });
        console.log("Response:", response.data);
        resetForm(); // Reset the form after successful submission
      } catch (error) {
        console.error("Error uploading product:", error);
      } finally {
        setSubmitting(false);
      }
    },
    
  })

   // Custom handleChange for the file input
   const handleImageChange = (event) => {
    formik.setFieldValue("image", event.currentTarget.files[0]); // Set the file in Formik state
  };


  return (
    <div className="flex justify-center items-center min-h-max py-5">
      <div className="bg-white rounded-md p-8 shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Upload New Product</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-wrap justify-between">

          <div className="w-[48%] my-3">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 w-full focus:ring-0 bg-pryClr focus:border-black"
            >
              <option value="">Select Category</option>
              <option value="plant">Plant</option>
              <option value="accessory">Accessory</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-sm">{formik.errors.category}</div>
            )}
          </div>

          <div className="w-[48%] my-3">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 w-full focus:ring-0 bg-pryClr focus:border-black"
              placeholder="Product name"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          <div className="w-[48%] my-3">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 w-full focus:ring-0 bg-pryClr focus:border-black"
              placeholder="Product quantity"
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <div className="text-red-500 text-sm">{formik.errors.quantity}</div>
            )}
          </div>

          <div className="w-[48%] my-3">
            <label className="block text-sm font-medium mb-2">Price ($)</label>
            <input
              type="number"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 w-full focus:ring-0 bg-pryClr focus:border-black"
              placeholder="Product price"
              step="0.01"
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            )}
          </div>

          <div className="w-full my-3">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              type="text"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 resize-none w-full focus:ring-0 bg-pryClr focus:border-black h-20"
              placeholder="Product description"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            )}
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange} // Use custom handler
              onBlur={formik.handleBlur}
              className="w-full bg-pryClr border p-2"
              accept="image/*"
            />
            {formik.touched.image && formik.errors.image && (
              <div className="text-red-500 text-sm">{formik.errors.image}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-1/2 mx-auto bg-green-600 rounded-md mt-10 text-white p-2 font-medium hover:bg-blue-600 transition"
          >
            {formik.isSubmitting ? "Uploading..." : "Upload Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
